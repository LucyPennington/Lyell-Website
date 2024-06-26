import React from "react";
import {Link} from "react-router-dom";
import Top from "../components/Header";
import HoverBox from "../components/HoverBox"
import lyell_3 from "../images/lyell_1.jpg"
import lyell_2 from "../images/banner.png"
import map from "../images/globe-image.jpg"
import PDFdownload from "../components/PDFdownload";


export default function Home() {

    return (
        <div className="">
            <Top
                title={"Charles Lyell"}
                imageURL={lyell_2}
                size={{text:"70px"}}
            />
            {/*<PDFdownload/>*/}
            <div className="container py-5 ">
                <p className="important-text lead py-3">This website facilitates access and research into the work of Scottish-born geologist Sir Charles Lyell (1797 - 1875) providing links to his printed books, the principal collection at the University of Edinburgh and Lyell related content elsewhere.
                </p>
            </div>
            <div className="album py-5 bg-dark">
                <div className="container">
                    <div className="row justify-content-center g-3 g-lg-5">
                        <HoverBox
                            info={{link: "/about"}}
                            content={{
                                title: "About Charles Lyell",
                                detail: "Learn more about Charles Lyell, his work, travel and findings",
                                image: {lyell_3},
                                alt: "pencil drawing of Charles Lyell"
                            }}
                            img={lyell_3}
                        />
                        <HoverBox
                            info={{link: "/collections"}}
                            content={{
                                title: "Notebooks, Papers, Offprints and Specimens",
                                detail: "Discover Lyell’s archive collection held by the University of Edinburgh",
                                image: "https://images.is.ed.ac.uk/luna/servlet/iiif/UoEsha~5~5~85421~382687/full/!1000,1000/0/default.jpg",
                                alt: "archive shelf"
                            }}
                            img="https://images.is.ed.ac.uk/luna/servlet/iiif/UoEsha~5~5~85421~382687/full/!1000,1000/0/default.jpg"
                        />
                    </div>
                    <div className="row justify-content-center g-3 g-lg-5 mt-3">
                        <HoverBox
                            info={{link: "/Publications"}}
                            content={{
                                detail: "Find out about Lyell’s publications – held in the archive in Edinburgh, and online",
                                image: "https://images.is.ed.ac.uk/luna/servlet/iiif/UoEsha~5~5~130439~471142/0,2000,6000,5000/750,/0/default.jpg",
                                alt: "Book Cover",
                                title: "Publications"
                            }}
                            img="https://images.is.ed.ac.uk/luna/servlet/iiif/UoEsha~5~5~130439~471142/0,2000,6000,5000/750,/0/default.jpg"
                        />
                        <HoverBox
                            info={{link: "/elsewhere "}}
                            content={{
                                title: "Lyell elsewhere",
                                detail: "Details and links to Lyell related material held by other organisations",
                                image: {map},
                                alt: "Book Cover"
                            }}
                            img={map}
                        />

                    </div>
                </div>
            </div>
            {/*<div className="txt-center py-5">*/}
            {/*    <h4>guide to the collection in person</h4>*/}
            {/*    <Link to='/collections/explore' className='btn-mobile'>*/}
            {/*        <button type="button" className="btn btn-red btn-labeled btn-info px-5 py-2 mt-3">*/}
            {/*            Library guide*/}
            {/*        </button>*/}
            {/*    </Link>*/}
            {/*</div>*/}
        </div>
    )
};
