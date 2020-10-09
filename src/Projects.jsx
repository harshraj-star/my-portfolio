import React from "react";
import { NavLink } from "react-router-dom";
import p1 from "../src/images/p1.png"


const Projects = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center ">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>PROJECTS <br /> <br /><strong className="brand-name"></strong></h1>





                                    <a href="https://harshraj-star.github.io/Educational-Website/" target="_blank" className="bbc" ><h6 className="my-3">
                                        1. E-learning platform
</h6></a>

<a href="https://harshraj-star.github.io/Let-Chat/" target="_blank" className="bbc" ><h6 className="my-3">
                                        2. Slack CLone App
</h6></a>




                                    <a href="https://harshraj-star.github.io/T-Rex-Game/" target="_blank" className="bbc"><h6 className="my-3 ">
                                        3. T-REX Run Chrome Browser Game  </h6></a>
                                        


                                    <a href="https://harshraj-star.github.io/Live-IPL-Score/" target="_blank" className="bbc"><h6 className="my-3">
                                        4. Live IPL Score API App in </h6></a>


                                    <a href="https://harshraj-star.github.io/Game-Website/" target="_blank" className="bbc"><h6 className="my-3">
                                        5. Gaming Store Website</h6></a>



                                    <a href="" target="_blank" className="bbc"><h6 className="my-3">
                                        6. Google Keep Clone </h6></a>







                                    <div className="mt-3">
                                        <NavLink to="/certi" className="btn-get-started "> Certifications.. </NavLink>
                                    </div>











                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={p1} width="400" height="140" className="img-fluid animated" alt="homeimg" />
                                </div>


                            </div>






                        </div>

                    </div>
                </div>
            </section>
        </>

    );
};

export default Projects;