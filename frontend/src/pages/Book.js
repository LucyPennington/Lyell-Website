import React, {useState} from "react";
import Top from "../components/Header"
import TextButton from "../components/TextButton"
import el_ft from "../images/Manual.jpg"
import textContent from "../content/books.json"
import links from "../content/booklinks.json"
import vol from "../images/elements-full-colour.png"
import bio from "../content/A Brief Bibliography of Charles Lyell.pdf";


function BookInfo({textContent, image}) {
    return (
        <div className="row">
            <div className="col-12 col-lg-8 about-box py-3">
                <h3>{textContent.header}</h3><br/>
                <p dangerouslySetInnerHTML={{__html: textContent.intro}}></p>
            </div>
            <div className="row col col-lg-4">
                {image.map((img) => (
                    <img className="col col-sm-5 col-lg-12 mx-2 my-4"
                         style={{maxWidth: "350px", height: "auto", objectFit: "contain"}}
                         src={img}
                         alt="notebook cover"/>
                ))}

            </div>
        </div>
    )
}


function ToggleTable({data}) {
    const [selectedEdition, setSelectedEdition] = useState(Object.keys(data)[0]);

    const handleEditionClick = (edition) => {
        setSelectedEdition(edition);
    };

    return (
        <div className="">

            {Object.keys(data).map((edition) => (
                edition !== "a" && (
                    <button
                        key={edition}
                        onClick={() => handleEditionClick(edition)}
                        className={selectedEdition === edition ? 'btn bk-green m-1' : 'btn btn-outline-secondary m-1'}
                    >
                        {edition}
                    </button>
                )
            ))}


            {selectedEdition && (
                <table className="table mt-3" style={{maxWidth: "1000px"}}>
                    <thead>
                    <tr>
                        <th>Document</th>
                        <th>Source</th>
                        <th>Link</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data[selectedEdition].map((item, index) => (
                        <tr key={index}>
                            <td>{item.Document}</td>
                            <td className="table-source">{item.Source}</td>
                            <td className="table-link" style={{wordWrap: "break-word"}}>
                                <a href={item.Link} style={{wordWrap: "break-word"}} target="_blank"
                                   rel="">
                                    {item.Link}
                                </a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}


function Books() {
    const images = {
        "Principles of Geology": ["https://images.is.ed.ac.uk/luna/servlet/iiif/UoEsha~5~5~130439~471142/pct:15,15,75,75/max/0/default.jpg"],
        "Elements of Geology": [el_ft],
        "Travels in North America": [],
        "Antiquity of Man": [],
        "Life, Letters and Journals": []
    };


    const handleKeyClick = (bookName) => {
        // Scroll to the relevant section using a scroll function (scrollToSection)
        scrollToSection(bookName);
    };

    // Function to scroll to the relevant section
    const scrollToSection = (sectionName) => {
        const sectionElement = document.getElementById(sectionName);
        if (sectionElement) {
            sectionElement.scrollIntoView({behavior: 'smooth'});
        }
    };
    const keyItemStyle = {
        backgroundColor: '#f0f0f0',
        border: '2px solid green'
    };

    const handleDownload = () => {
        const downloadUrl = bio;
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = '../content/A Brief Bibliography of Charles Lyell.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return (
        <div>
            <Top
                title={"Publications"}
                imageURL={vol}
                size={{height: "200px", text: "50px"}}
            />
            <div className="container d-flex justify-content-center">
                <div className="row" style={{maxWidth: "1300px"}}>
                    <div className="pb-3">
                        <p className="important-text lead py-3">Lyell’s <i>Principles of Geology</i>, planned since 1827
                            when he was aged 30 and published in 1830, was the culmination of his interests, education
                            and travel. He would go on to dedicate his life to writing science and travel books.</p>
                        <p>Charles Lyell lived, worked and published in an age distinguished by growing public interest
                            in the sciences and by publishers keen to meet that interest. This was a period marked by
                            the appearance of new scientific journals and literary periodicals, and by scientific
                            societies. Publishers were keen to promote new ideas and theories, producing books in
                            expensive quarto editions and in cheaper and more widely available octavo format, and they
                            encouraged illustrations of different sorts to illuminate their texts. Lyell benefitted from
                            and responded to these circumstances. He had a good working relationship in particular with
                            the publisher <a href="https://en.wikipedia.org/wiki/John_Murray_(publisher,_born_1778)"
                                             target="_blank">John Murray</a> (1778 - 1843) who produced several editions
                            of Lyell’s <i>Principles of Geology</i>, Lyell’s first and most influential book.</p>
                        <p>Lyell’s writing process – edits, review, notes – features in a range of different formats
                            throughout the Collection held at Edinburgh University – including Lyell’s own annotated
                            copies of his publications, archival manuscripts, as well as detail recorded in the
                            notebooks. Lyell’s lectures also document his writing techniques. See also: </p>
                        <ul style={{listStyle: "none"}}>
                            <li><a href="https://archives.collections.ed.ac.uk/repositories/2/archival_objects/199146"
                                   target="_blank">Annotated Published Works by Sir Charles Lyell, 1830-1874 |
                                University of Edinburgh Archive and Manuscript Collections</a></li>
                            <li><a href="https://archives.collections.ed.ac.uk/repositories/2/archival_objects/199225"
                                   target="_blank">Reviews of Published Works | University of Edinburgh Archive and
                                Manuscript Collections </a></li>
                            <li><a href="https://archives.collections.ed.ac.uk/repositories/2/archival_objects/21268"
                                   target="_blank">Lectures on Geology, 1832-1846 | University of Edinburgh Archive and
                                Manuscript Collections </a></li>
                            <li><a href="https://archives.collections.ed.ac.uk/repositories/2/archival_objects/199130"
                                   target="_blank">Lectures on Geology, 1842-1861 | University of Edinburgh Archive and
                                Manuscript Collections </a></li>
                        </ul>
                        <p>Stuart A. Baldwin (1930-2021) used his expertise as an antiquarian bookseller to compile
                            ‘Charles Lyell - a brief Bibliography’ in 2013. It provides a comprehensive guide to Lyell’s
                            literary career, detailing the 33 editions of his books issued up to 1911, articles written
                            by Lyell, biographies of Lyell, and articles and other content written on Lyell and his
                            ideas. <span onClick={handleDownload} style={{ textDecoration: 'underline', cursor: 'pointer', color: "blue" }}> Download here </span></p>
                    </div>
                    <div className="col order-lg-1 sidebar top-bar-green">
                        <div className="sidebar1-section">
                            <h3 className="sidebar1-header">Page content</h3>
                            <div className="sidebar1-line"></div>
                            <div className="sidebar1-content">
                                <ul>
                                    {Object.keys(textContent).map((bookName) => (
                                        <li
                                            key={bookName}
                                        >
                                    <span style={{color: "blue", cursor: "pointer"}}
                                          onClick={() => handleKeyClick(bookName)}>
                                      {bookName}
                                    </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <h3 className="sidebar1-header">Reference</h3>
                            <div className="sidebar1-line"></div>
                            <TextButton/>
                        </div>
                    </div>
                    <div className="body-d col-12 order-lg-0 col-lg-9 top-bar-green sideline">
                        <p className="pt-5 bold-text">This section presents a complete list of Lyell’s printed books
                            published by <a href="https://en.wikipedia.org/wiki/John_Murray_(publishing_house)"
                                            target="_blank">John Murray</a>, in chronological order, with links to
                            initial and later editions online. For ease of reference, we have used an abbreviated
                            version of his titles: </p>
                        <div>
                            {Object.keys(textContent).map((bookName) => (
                                <div className="my-5 top-bar-green-thin" key={bookName} id={bookName}>
                                    <BookInfo
                                        textContent={textContent[bookName]}
                                        image={images[bookName]}
                                    />
                                    <div>
                                        <ToggleTable data={links[bookName]}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Books;
