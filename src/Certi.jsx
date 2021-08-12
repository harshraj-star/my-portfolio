import React from "react";
import { NavLink } from "react-router-dom"
import c3 from "../src/images/c3.png"
import Footer from "./Footer";


const Certi = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center ">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>CERTIFICATES <br /> <br /><strong className="brand-name"></strong></h1>


                                    <h6 className="my-3">
                                        📋 "HackerRank Java(Basics)"
                                    </h6>

                                    <h6 className="my-3">
                                        📋 "HackerRank SQL(Basics)"
                                    </h6>

                                    <h6 className="my-3">
                                        📋 "The Complete Front-End Web Development Course"
                                    </h6>



                                    <h6 className="my-3 ">
                                        📋 "Custom Attribution Modeling with Google Analytics" from Coursera
                                    </h6>



                                    <h6 className="my-3">
                                        📋 "Java Tutorial Course" from SoloLearn
                                    </h6>

                                    <h6 className="my-3">
                                        📋 "Google Ads (AdWords) Essential Training"
                                    </h6>

                                    <h6 className="my-3">
                                        📋 "HTML Fundamentals" from SoloLearn
                                    </h6>





                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={c3} width="400" height="140" className="img-fluid animated" alt="homeimg" />
                                </div>



                            </div>



                            <div className="mt-3">
                                <NavLink to="/interest" className="btn-get-started "> Interest.. </NavLink>
                            </div>





                        </div>


                    </div>
                </div>
            </section>
            <Footer />
        </>

    );
};

export default Certi;