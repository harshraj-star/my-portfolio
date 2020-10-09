import React from "react";



import { NavLink } from "react-router-dom";

const Common = (props) => {
    return (
        <>
        <section id ="header" className="d-flex align-items-center ">
        <div className ="container-fluid ">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>{props.name} <br/> <br/><strong className="brand-name">{props.nam} </strong></h1>

                <h5 className="my-3">
                I am a Pre-Final year Electronics and Communication Student who have interest in Web Development as well as Application Development.I am good at problem solving , Fast learner , Self Focused and looking forward for an Internship.
            
                
                
                </h5>
                <br/><br/><br/><br/>

                


                
                <div className="mt-3">
                    <NavLink to ={props.visit} className="btn-get-started "> {props.btname} </NavLink>
                </div>

                


             
                

                

                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={props.imgsrc} width="400" height="140" className="img-fluid " alt="homeimg"/>
                </div>

                
                </div>
                

                

                
                    
                </div>
                
            </div>
        </div>
        </section>

        
        
        </>

    );
};

export default Common;