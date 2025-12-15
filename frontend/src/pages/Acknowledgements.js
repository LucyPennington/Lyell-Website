import React from 'react';
import aboutText from "../content/about.json";
import Top from "../components/Header";
import lyellImgp from "../images/N48p12&13C.jpg";
import NHMFlogo from "../images/NHMFlogo.jpg"
import IASlogo from "../images/IASlogo.jpg"

export default function About() {
    const aboutT = aboutText.aboutmain
    const aboutH = aboutText.history
    return (
        <div>
            <Top
                title={"Acknowledgements"}
                imageURL={lyellImgp}
                size={{height: "250px"}}
            />

            <div className="container my-5" style={{maxWidth: "1000px"}}>
                <p>Acquiring and making the Sir Charles Lyell Collection accessible has been made possible through the
                    support and efforts of many individuals and institutions. The University of Edinburgh acknowledges
                    and thanks these generous and vital contributions.</p>
                <div className="d-flex mb-4">
                    <img className="me-3" src={NHMFlogo} alt="Image 1" style={{height: "150px"}}/>
                    <img src={IASlogo} alt="Image 2" style={{height: "150px"}}/>
                </div>
                <h3 id="notebook">Notebooks</h3>
                <p>The 2019 acquisition of the Lyell notebooks required a remarkable combination of societies, grant
                    funders and individuals from across the UK and the rest of the world. In addition to major grants
                    from the National Heritage Memorial Fund and the Murray Family over one thousand <a
                        href="#notebook-supporters">donations</a> made the
                    purchase possible.</p>
                <h3 id="access-project">Access Project</h3>
                <p>Making the notebooks, other archive and collection materials, freely accessible required an extensive
                    programme of conservation, digitisation, curatorial and academic work, which has been supported by
                    further financial donations, including for website development from the <a
                        href="https://www.sedimentologists.org/">International Association of Sedimentologists</a>. See
                    the <a href="#access-supporters">Access Project Supporters</a></p>
                <h3 id="volunteers">Volunteers</h3>
                <p>In addition to staff and paid student interns, the Lyell Access Project has greatly benefited from a
                    wide range of volunteers and experts who contributed their time, enthusiasm and efforts. We
                    acknowledge with particular thanks the expertise received from <a
                        href="https://en.wikipedia.org/wiki/James_A._Secord">Professor James Secord</a>, Felicity
                    MacKenzie, and bibliographer Stuart Baldwin (1930-2021). Thanks to Drew Coleman, Beverly Gordon,
                    Ella Fornari, Caryl Dreiblatt and Bob Burrell – and those University of Edinburgh students who
                    supported the transcription of the notebook indexes and added detail to the lists of correspondents.
                    Additional thanks are due to the <a href="#access-supporters"> Charles
                        Lyell Advisory Board</a>, chaired
                    by Professor Charles Withers.</p>
                <div className="top-bar-red mb-4 mt-4"></div>
                <h5 id="notebook-supporters">Notebook Supporters</h5>
                <p>Leading institutions, groups and individuals have generously supported or endorsed our campaign to
                    save Charles Lyell's notebooks. Thanks to the generosity of over 1,100 individuals, institutions and
                    supporters we were able to save the Sir Charles Lyell’s notebooks. We extend a warm and heartfelt
                    thank you to those who made it possible.</p>
                <p>Thank you as well to all of our supporters who wish to remain anonymous. If your name does not appear
                    and you would like it to, please contact <a href="HeritageCollections@ed.ac.uk">Heritage Collections</a>.</p>
                <p>The Roy Alexander Charitable Trust, Amateur Geological Society, Baldoukie Charitable Trust,
                    Blackbourn Geoconsulting, Cambridge Philosophical Society, Cambridge Society of Edinburgh, The Curry
                    Fund, Geologists' Association, History Of Earth Sciences Society, Edinburgh Geological Society,
                    Edinburgh University Club of London, Friends of Edinburgh University Library, Friends of the
                    National Libraries, The Friends of Charles Darwin, GeoConservationUK, GeoLancashire, The German
                    Geological Society, The Geological Society of Glasgow, Ground and Project Consultants Ltd, Harrow
                    and Hillingdon Geological Society, Heriot-Watt University, Highland Geological Society, History of
                    Geology Group, The Lipman Family Foundation, The Liverpool Geological Society, Manchester Geological
                    Association, Murray Family, National Heritage Memorial Fund, Geological Society of Norfolk, North
                    Sea Core, Palaeontological Association, Petroleum History Institute, Reading Geological Society,
                    Tayside Geodiversity, Edinburgh University Club of Toronto, Town & Country Fine Foods, Warwickshire
                    Geological Conservation Group.</p>
                <p>Thank you also to those individuals who contributed: Nean Allman, Tom Armstrong, Ronald L Austin,
                    Vincent Balfour, Peter W Barnes, Anne Barrett, David G Bate, Richard Battersby, Dr Graham Beamson,
                    Prof German E Berrios, Roy Biddle, Dr Denis Bilodeau, Dr P E Binns, Prof Patrick Boylan, Carolyn
                    Brodie Mackay, Dr Alan D G Brown, Dr Iain Gordon Brown, John Burgener, Bob Burrell, Prof Stephen
                    Casper, Sam Caethoven, Pratik Chakrabarti, Mrs Lynne Cockitt, Helen Cromie, Peter Crowther, Prof
                    Martin Culshaw, Prof Stephen Daly, Mrs Charlotte Dean (nee Bulman), Prof Paul Dennis, Dr Peter
                    Dolan, Jason Drake, Roger Dunshea, Professor David Elliot, Beatrix Esk, Dr Martin C Evans, Dr P A
                    Floyd, Prof Richard Fortey, Peter B Freshwater, Ian and Louise Gardiner, Robert G Garrett, Brian
                    Garvan, Olwen Goss, Dr Alastair Graham, Dr Tim Grapes, Dr Andrew Grout, Philip Hadland, David E W
                    Hall, Dr Donald Hallett, Wilko Graf von Hardenberg, John Henry, Dr Garrett Herman, Jon Hodge, J M
                    Hodgson, Mrs C A Horrocks, James Hunter, David Jarman, Peter Jones, Prof Emeritus Gilbert Kelling,
                    Mr Peter Kennett, Dr Diane Knill (Lady Knill), Marie Knudsen, Marie Korey, Rachel Laudan, Prof Alan
                    Lord, Prof John Ludden, Fiona V MacKelvie, Catarina Madruga, Prof David Manning, Philip Marshall,
                    Professor Dr Alison Martin, Dr Roger Mason, Professor John Mather, Dr John A A McCallum, David
                    McClay, Chris McCormick, Gregor McElvogue, Dr Annette McGrath, Roy W McIntyre, Duncan J McKay, Fiona
                    V. MacKelvie, Dr Alex Menez, Professor Martin Menzies, Peter Micklethwait, Simon Richard Miles, Prof
                    Stuart Monro, Dr Peter Morris, Dr Arthur Murchison, Prof John Murray, John Naismith, Dr Stephen Ng,
                    Prof Dr Kärin Nickelsen, Peter Nicol, Dr James Nye, Naomi Oreskes, Prof Graham Park, John Parkins,
                    Dr Ronald Pattinson, Dr David Pattison, Ruth Pollitt, Martin Price, Claire Priestley-O'Keeffe, Dr
                    Kevin Privett, Dr Colin Prosser, Dr D I Rainey, Dr Tom J A Reijers, Liz Reilly, Dr Ruth Richardson,
                    Dr Mary Rimmer, Prof Isabel Rivers, Dr Ian Rolfe, Prof Martin Rudwick, Eric Russell, Sefa Sahin,
                    Richard Scothorne, Professor James A Secord, Prof Dick Selley, Dr Alastair D.L. Sharp, Alexander
                    Shaw, David Shilston, Prof Graeme Simpson, Dr Peter W Skelton, Alastair and Carola Small, Jennifer
                    Nimmo Smith, Dr Anthony Spencer, Roy Starkey, Dr Michael Stock, Jim Sutherland, Brian Tait, Paul
                    Tambuyser, the Taylors of Tannadice, Prof Gavin H Thomas, Dr Christopher Toland, Richard Trounson,
                    John Underhill, Dr John van Wyhe, Andrew Wainwright, Prof Germaine Warkentin, Susan Watt, Karsten
                    Werner, Margaret Wilkes, Mrs Caroline Willis, Dr Andrew Wilson, Professor Charles W J Withers, Sarah
                    Wride, Dr Jeremy R Young.</p>
                <h5 id="access-supporters">Access Project Supporters</h5>
                <p>Thank you to the following organisations who helped make the Charles Lyell Collections accessible;
                    British Society for the History of Science, Friends of Edinburgh University Library, Friends of the
                    National Libraries, Geologists' Association’s Curry Fund, International Association of
                    Sedimentologists, Murray Family and the National Manuscript Conservation Trust.</p>
                <p>Thank you also to the following individuals for their support; Tom Armstrong, Ken Baker Bork, Bennett
                    Bearden, Sam Carthoven, Hermione Cockburn, Janet Combes, Ian Fowell, Jim Hunter, Barbara Kleiser,
                    Jim Laidlaw, Alison Martin, David McClay, Peter Micklethwait, Simon Richard Miles, Peter Nicol, Jim
                    O'Connell, David and Jean Rainey, Anne Ricculli, Ruth Richardson, Mary Savina, Henry Schaffer,
                    Sandro Serra, Jane Spooner, Beckett Sterner, Louise Tizzard, Ann Wilkie, Germaine Warkentin,
                    Caroline Willis, Charlie Withers.</p>
                {/*<p>*/}
                {/*    <a href="https://nhmf.org.uk/" target="_blank">The National Heritage Memorial Fund </a> <br/><br/>*/}
                {/*    The Murray Family  <br/><br/>*/}
                {/*    <a href="https://www.fnl.org.uk/" target="_blank">Friends of the National Libraries  </a><br/><br/>*/}
                {/*    <a href="https://friendsofeul.wordpress.com/" target="_blank">The Friends of Edinburgh University Library </a><br/><br/>*/}
                {/*    <a href="https://www.sedimentologists.org/" target="_blank">The Institute of Sedimentologists  </a><br/><br/>*/}
                {/*</p>*/}
                <h5 id="advisory-board">Charles Lyell Advisory Board</h5>
                <p>
                    Dr Sam Alberti (National Museums Scotland) <br/>
                    Dr Hermione Cockburn (Dynamic Earth) <br/>
                    Professor Emeritus Richard Fortey (Natural History Museum, London) <br/>
                    Professor Aileen Fyfe (University of St Andrews) <br/>
                    Professor Charles Greifenstein (American Philosophical Society) <br/>
                    Professor Richard Herrington (Natural History Museum, London) <br/>
                    Dr Rebekah Higgitt (National Museums Scotland) <br/>
                    Dr Eliza Howlett (Oxford Museum of Natural History) <br/>
                    Professor Sandra Kemp (University of Lancaster) <br/>
                    Dr Anthony Loveland (Geological Society of London) <br/>
                    Valerie-Ann Lutz (American Philosophical Society) <br/>
                    Professor Ralph O'Connor (University of Aberdeen) <br/>
                    Professor Emeritus Martin Rudwick (University of California and Cambridge University) <br/>
                    Professor Emeritus James A. Secord (University of Cambridge) <br/>
                    Maggie Simmons (Geological Society of London) <br/>
                    Dr Patrick Spero (American Philosophical Society) <br/>
                    Professor John Underhill (University of Aberdeen) <br/>
                    Professor Emeritus Charles W. J. Withers (University of Edinburgh)

                </p>
            </div>
        </div>
    );
}