import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <div className ="container-fluid nav_bg">
            <div className="row">
                <div className="col-12 mx-auto">

                
                <nav className="navbar navbar-expand-lg navbar-secondary bg-light ">
                
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item">
                            <NavLink activeClassName="menu_active" 
                            
                            exact className="nav-link active" 
                            aria-current="page" to="/">About 
                            </NavLink>
                        </li>
                        

                        <li className="nav-item">
                            <NavLink 
                            activeClassName="menu_active"
                            exact
                            className="nav-link" to="/education">Education
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink 
                            activeClassName="menu_active"
                            exact
                            className="nav-link" to="/skills">Skills

                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                            activeClassName="menu_active"
                            exact
                             className="nav-link" to="/projects">Projects
                            
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                            activeClassName="menu_active"
                            exact
                             className="nav-link" to="/certi">Certifications
                            
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                            activeClassName="menu_active"
                            exact
                             className="nav-link" to="/interest">Interest
                            
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                            activeClassName="menu_active"
                            exact
                             className="nav-link" to="/social">Know More
                            
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                            activeClassName="menu_active"
                            exact
                             className="nav-link" to="/resume">Resume
                            
                            </NavLink>
                        </li>

                        

                        

                        </ul>
                        </div>
                        </nav>
                        
                            
                
                
</div>
            </div>
        </div>

        </>

    )
}

export default Navbar;