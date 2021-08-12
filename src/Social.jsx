import React from "react";
import { NavLink } from "react-router-dom";
import soc from "../src/images/soc.png"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LanguageIcon from '@material-ui/icons/Language';
import Footer from "./Footer";


const Social = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center ">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>Contact Me/Follow Me <br /> <br /><strong className="brand-name"></strong></h1>

                                    <a href="https://www.linkedin.com/in/harsh-raj-13326b1a2/" target="_blank" className="bbc" ><h6 className="my-3">
                                        <LinkedInIcon /> LinkedIn</h6></a>
                                    <a href="https://github.com/harshraj-star" target="_blank" className="bbc"><h6 className="my-3 ">
                                        <GitHubIcon /> GitHub</h6></a>



                                    <a href="https://www.instagram.com/_harsh.cr7/" target="_blank" className="bbc"><h6 className="my-3">
                                        <InstagramIcon /> Instagram</h6></a>


                                    <a href="" target="_blank" className="bbc"><h6 className="my-3">
                                        <TwitterIcon /> Twitter</h6></a>



                                    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" className="bbc"><h6 className="my-3">
                                        <EmailIcon /> Email : hr45226@gmail.com </h6></a>

                                    <a href="https://www.youtube.com/channel/UCC5VWiSUNNQnQwT1szZDMdQ?view_as=subscriber" target="_blank" className="bbc"><h6 className="my-3">
                                        <YouTubeIcon /> YouTube</h6></a>

                                    <a href="https://harshraj-star.github.io/Educational-Website/" target="_blank" className="bbc"><h6 className="my-3">
                                        <LanguageIcon /> My Website</h6></a>



                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={soc} width="400" height="140" className="img-fluid animated" alt="homeimg" />
                                </div>




                            </div>


                            <div className="mt-3">
                                <NavLink to="/resume" className="btn-get-started "> Resume.. </NavLink>
                            </div>





                        </div>


                    </div>
                </div>
            </section>
            <Footer />
        </>

    );
};

export default Social;