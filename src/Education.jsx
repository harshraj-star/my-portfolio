import React from "react";
import { NavLink } from "react-router-dom";
import e from "../src/images/e.png"
import Footer from "./Footer";



const Education = () => {
    return (
        <>
        
        <section id ="header" className="d-flex align-items-center ">
        <div className ="container-fluid ">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>EDUCATION <br/> <br/><strong className="brand-name"></strong></h1>

                <h2 className="my-3">
                &nbsp;NOIDA INSTITUTE OF ENGINEERING AND TECHNOLOGY,GREATER &nbsp;NOIDA
                
                
                </h2>

                <h4 className="my-3 ">
                &nbsp;BACHELOR OF TECHNOLOGY  
                </h4>

                <h5 className="my-3">
                &nbsp;Electronics and Communication Engineering<br/>
                &nbsp;CGPA: 8.7
                <br/><br/><br/><br/>
                
                </h5>

                


                
                <div className="mt-3">
                    <NavLink to ="/skills" className="btn-get-started "> My Skills.. </NavLink>
                </div>

                


             
                

                

                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={e} width="400" height="140" className="img-fluid animated" alt="homeimg"/>
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

export default Education;