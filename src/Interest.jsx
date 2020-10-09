import React from "react";
import { NavLink } from "react-router-dom";
import i from "../src/images/i.png"


const Interest = () => {
    return (
        <>
        <section id ="header" className="d-flex align-items-center ">
        <div className ="container-fluid ">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>INTERESTS <br/> <br/><strong className="brand-name"></strong></h1>

                <h6 className="my-3">
                ⚫️ Website Designing 
                </h6>

                <h6 className="my-3 ">
                ⚫️ Machine Learning
                </h6>

                <h6 className="my-3">
                ⚫️ Software Development
                </h6>

                <h6 className="my-3">
                ⚫️ Video Editing
                </h6>

                <h6 className="my-3">
                ⚫️ Gaming
                </h6>

                <h6 className="my-3">
                ⚫️ Programming
                </h6>

                


                
                <div className="mt-3">
                    <NavLink to ="/social" className="btn-get-started "> My Social Media.. </NavLink>
                </div>

                


             
                

                

                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={i} width="400" height="140" className="img-fluid animated" alt="homeimg"/>
                </div>

                
                </div>
                

                

                
                    
                </div>
                
            </div>
        </div>
        </section>
        </>

    );
};

export default Interest;