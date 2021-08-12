import React from "react";
import r from "../src/images/r.png"
import Footer from "./Footer";
import resu from "../src/images/resu.jpg"


const Resume = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center ">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                                    <h1  >RESUME <br /> <br /><strong className="brand-name"></strong></h1>

                                    <div className="col-lg-5 order-2 order-lg-2 header-img">
                                        <a href="https://drive.google.com/file/d/1MYf0fAufc0JH_USkRab8Oo8zz0uf_0j3/view?usp=sharing" target="_blank"> <img src={resu} width="150" height="200"  alt="homeimg" /> </a>
                                    </div>










                                    <div className="mt-3">
                                        <a href="https://drive.google.com/file/d/1MYf0fAufc0JH_USkRab8Oo8zz0uf_0j3/view?usp=sharing" className="btn-get-started  " target="_blank"> DOWNLOAD PDF </a>
                                    </div>
                                    <br />









                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={r} width="400" height="140" className="img-fluid animated" alt="homeimg" />
                                </div>




                            </div>






                        </div>

                    </div>
                </div>
            </section>

            <Footer />


        </>

    );
};

export default Resume;