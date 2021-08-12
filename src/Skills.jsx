import React from "react";
import { NavLink } from "react-router-dom";
import s2 from "../src/images/s2.png";
import ProgressBar from 'react-bootstrap/ProgressBar'
import Footer from "./Footer";


const Skills = () => {
    return (
        <>

            <section id="header" className="d-flex align-items-center ">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column mx-auto">
                                    <h1> Skills<br /> <br /><strong className="brand-name"> </strong></h1>





                                    <div className="row">

                                        <h6 className="col-lg-6 order-1 order-lg-2">
                                            ▪️React<br />
                                            <ProgressBar now={90} />
                                            ▪️Java<br />
                                            <ProgressBar now={70} />
                                            ▪️JavaScript<br />
                                            <ProgressBar now={70} />
                                            ▪️HTML<br />
                                            <ProgressBar now={80} />
                                            ▪️CSS<br />
                                            <ProgressBar now={80} />
                                            ▪️Node js
                                            <ProgressBar now={50} />
                                            <br />
                                        </h6>

                                        <h6 className="col-lg-6 order-1 order-lg-2">
                                            ▪️MongoDB<br />
                                            <ProgressBar now={30} />
                                            ▪️Express js<br />
                                            <ProgressBar now={60} />
                                            ▪️Python<br />
                                            <ProgressBar now={40} />
                                            ▪️Video Editing<br />
                                            <ProgressBar now={90} />
                                            ▪️SEO<br />
                                            <ProgressBar now={90} />
                                            ▪️Google Analytics<br />
                                            <ProgressBar now={90} />
                                        </h6>









                                    </div>


                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={s2} width="300" height="120" className="img-fluid animated" alt="homeimg" />
                                </div>





                            </div>

                            <div className="mt-3">
                                <NavLink to="/projects" className="btn-get-started "> My Projects </NavLink>
                            </div>
                            <br />






                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>

    );
};

export default Skills;