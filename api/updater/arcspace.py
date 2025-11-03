import json, logging
import os
import re

# import asnake
from asnake.client import ASnakeClient

url = 'https://aspaceapi.collections.ed.ac.uk'
user = 'apiread'
password = 'K1X7QNOrkViWihRo'
token = ''
logger = logging.getLogger(__name__)


def call_archive(target, param=None):
    client = ASnakeClient(baseurl=url, username=user, password=password)
    client.authorize()
    try:
        if param:
            result = client.get(target, params=param)
        else:
            result = client.get(target)
        logger.info(f"ArchivesSpace API request: {target}, params: {param}, response status code: {result.status_code}")
        logger.debug("API call successful: " + target)

        return result.json()
    except Exception as e:
        # Log error if API call fails
        logger.error(f"Failed to fetch data from archivesSpace API: {e}")
        raise


def simplify_data(notebook_object):
    """
    takes a notebook given by the archivesspace api and simplifies it, reducing its fields to only those of interest
    it keeps a simplified form of the archivespace tags but still using archivespace codes so that more processes and
    detail can be drawn from them but means not currently human friendly. Notes go through some modifications.

    :param notebook_object: the raw notebook object given by archivesspace api

    :return: the notebook object in the desired formate
    """
    better_object = {key: notebook_object[key] for key in
                     notebook_object.keys() & {'title', 'display_string',
                                               'level', 'volumes',
                                               'component_id', 'id_0', 'uri'}}
    for key in notebook_object:
        if key == "subjects" or key == "linked_agents":
            subjects = []
            better_object["creators"] = []
            for i in notebook_object[key]:
                if "role" in i and i["role"] == "creator":
                    better_object["creators"].append(i["ref"])
                subjects.append(i["ref"])
            better_object[key] = subjects
        if key == "notes":
            better_object = note_time(better_object, notebook_object)
            better_object["notes"] = separate_warning(better_object["notes"])
            if not better_object["notes"]:
                better_object["notes"] = [{
                    "type": "scopecontent",
                    "content": "-"
                }]
            better_object["notes"] = withDesc(better_object)
        if key == "dates":
            if notebook_object[key]:
                dates = notebook_object[key][0]
                better_object["dates"] = {"expression": dates.get("expression", "date-missing"),
                                          "begin": dates.get("begin", "date-missing"),
                                          "end": dates.get("end", "date-missing")}
    return better_object


def get_name(target="/agents/people/86"):
    result = call_archive(target)
    identifier = "person"
    if result["jsonmodel_type"] == "agent_family":
        identifier = "family"
    if result["jsonmodel_type"] == "agent_corporate_entity":
        identifier = "corporate_entities"
    return result["names"][0]["sort_name"], identifier, result.get("publish", 0)


def get_subject(target="/subjects/27893"):
    result = call_archive(target)
    if result["title"]:
        person = result["title"]
        subject = result["terms"][0]["term_type"]
    else:
        person = result["names"][0]["sort_name"]
        subject = result["terms"][0]["term_type"]
    return person, subject, result.get("publish", 0)


class TagsAgain:
    def __init__(self):
        self.tagStore = {}
        self.tagDetails = []
        current_dir = os.path.dirname(os.path.abspath(__file__))
        self.tagPath = os.path.join(current_dir, '..', 'app', 'data', 'tags')

    def expand_tags(self, tags, shelfmark):
        result = {}
        with open(self.tagPath + "/all_tags.json", 'r') as outFile:
            localTags = json.load(outFile)
        self.tagStore = localTags
        for tag in tags:
            if tag not in self.tagStore:
                self.new_tag(tag)
            if not self.tagDetails:
                with open(self.tagPath + '/tag_' + self.tagStore[tag] + '.json', 'r') as outFile:
                    tfile = json.load(outFile)
                self.tagDetails = tfile
            for t in self.tagDetails:
                if t['id'] == tag:
                    result[t["title"]] = self.tagStore[tag]
                    if shelfmark not in t["entries"]:
                        t["entries"].append(shelfmark)
            with open(self.tagPath + "/tag_" + self.tagStore[tag] + ".json", 'w') as file:
                json.dump(self.tagDetails, file, indent=4)
            self.tagDetails = []
        return result

    def new_tag(self, tag):
        id = tag.split('/')
        result, topic = "", ""
        published = False
        if id[1] == "subjects":
            result, topic, published = get_subject(tag)

        if id[1] == "agents":
            result, topic, published = get_name(tag)

        new = {
            "title": result,
            "id": tag,
            "published": published,
            "entries": []
        }
        with open(self.tagPath + "/all_tags.json", 'w') as file:
            self.tagStore.update({tag: topic})
            json.dump(self.tagStore, file, indent=4)
        if result:
            with open(self.tagPath + "/tag_" + topic + ".json", "r+") as file:
                file_data = json.load(file)
                file_data.append(new)
                self.tagDetails = file_data
                file.seek(0)
                # file.truncate()
                json.dump(file_data, file, indent=4)


def resolveSubNote(subN):
    content = subN.get("content")
    if not content:
        content = subN.get('items')
        content = "\n<lb/>".join(map(lambda x: x["value"] + " " + x["label"], content))
        if not content:
            print(subN["jsonmodel_type"] + " has no process")
    return content


def note_time(better_object, notebook_object):
    better_object["notes"] = []
    out_notes = better_object["notes"]
    for note in notebook_object["notes"]:
        if not note["publish"]:
            continue
        temp = {}
        for pre in ["label", "type"]:
            if pre in note:
                temp[pre] = note[pre]
        note_info = "subnotes"
        if len(note[note_info]) > 1 and note["type"] == "scopecontent":
            for subNote in note["subnotes"]:
                cop = {"content": resolveSubNote(subNote)}
                cop.update(temp)
                out_notes.append(cop)
        else:
            temp["content"] = "\n".join(map(lambda x: resolveSubNote(x), note["subnotes"]))
            out_notes.append(temp)
    return better_object


def separate_warning(notes):
    for note in notes:
        noteText = note["content"].lower()
        if "content warning" in noteText or "contentwarning" in noteText:
            otherText = ""
            if "<lb></lb>" in noteText:
                tobe = note["content"].split("<lb></lb>")
                tobe = [item for item in tobe if item.strip() != ""]
                warningText = tobe[0]
                if len(tobe) == 3:
                    if "when known, lyell" in tobe[2].lower():
                        otherText = tobe[1].strip(" \n") + " " + tobe[2]
                    else:
                        print("third unknown note")
                elif len(tobe) > 3:
                    print("too many notes!")
                    otherText = tobe[1].strip(" \n")
                elif len(tobe) != 1:
                    otherText = tobe[1].strip(" \n")
            elif "the following table of content" in noteText:
                tobe = note["content"].split("The following table of content")
                warningText = tobe[0]
                otherText = "The following table of content" + tobe[1].strip(" \n")
            else:
                warningText = noteText

            notes.append(
                {
                    "label": "Content warning",
                    "type": note["type"],
                    "content": warningText
                }
            )
            if otherText:
                other = {
                    "type": note["type"],
                    "content": otherText
                }
                if note.get("label"):
                    other["label"] = note["label"]
                notes.append(other)
            notes.remove(note)
            break
    return notes


def separate_warning_new(notes):
    for note in notes:
        noteText = note["content"].lower()
        if "content warning" in noteText:
            otherText = ""
            if "<lb></lb>" in noteText:
                tobe = note["content"].split("<lb></lb>")
                tobe = [item for item in tobe if item.strip() != ""]
                warningText = tobe[0]
                for n in tobe[1:]:
                    other = {
                        "type": note["type"],
                        "content": n
                    }
                    if note.get("label"):
                        other["label"] = note["label"]
                    notes.append(other)
                if len(tobe) == 3:
                    if "when known, lyell" in tobe[2].lower():
                        otherText = tobe[1].strip(" \n") + " " + tobe[2]
                    else:
                        print("third unknown note")
                elif len(tobe) > 3:
                    print("too many notes!")
                    otherText = tobe[1].strip(" \n")
                elif len(tobe) != 1:
                    otherText = tobe[1].strip(" \n")
            elif "the following table of content" in noteText:
                tobe = note["content"].split("The following table of content")
                warningText = tobe[0]
                otherText = "The following table of content" + tobe[1].strip(" \n")
            else:
                warningText = noteText

            notes.append(
                {
                    "label": "Content warning",
                    "type": note["type"],
                    "content": warningText
                }
            )
            if otherText:
                other = {
                    "type": note["type"],
                    "content": otherText
                }
                if note.get("label"):
                    other["label"] = note["label"]
                notes.append(other)
            notes.remove(note)
            break
    return notes


def withDesc(notebook):
    notes = notebook["notes"]
    newNotes = []
    regex = re.compile(
        r'(The following table of content|Transcription note|Transcripton note|This index is not in Lyell|There is no actual index|There is no index)')
    i = 0
    for note in notes:
        found = False
        label = note.get("label")
        if label:
            label = label.lower()
        if note["type"] == "processinfo" or note["type"] == "accessrestrict":
            continue
        if note["type"] == "phystech" or note["type"] == "bioghist" or note["type"] == "relatedmaterial":
            found = True
        if note["type"] == "scopecontent":
            if note["content"].count("p.") > 7:
                found = True
                note["desc"] = "index"
            elif label == "content warning":
                found = True
                note["desc"] = "cw"
            elif "[]" in note["content"] or "[ ]" in note["content"] or "square brackets" in note["content"]:
                found = True
                note["desc"] = "tguide"
            elif regex.search(note["content"]) or label == "transcription note":
                found = True
                note["desc"] = "ixinfo"
            elif i == 0:
                found = True
                note["desc"] = "dis"
            elif notebook["component_id"] == "Coll-203/A2/5":
                found = True
                note["desc"] = "index"
            elif label == "lyell's own index":
                found = True
                note["desc"] = "ixinfo"
            i += 1
        if not found:
            print(notebook["component_id"], label, i, note["content"])
        newNotes.append(note)
    return newNotes
