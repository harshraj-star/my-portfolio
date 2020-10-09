import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import logo from "../src/images/logo.png"


const About = () => {
    return (
        <>
        <Common 
             
            nam="Harsh Raj"
            imgsrc = {logo}
            visit="/education"
            btname = "My Education.."
        />
        </>

    );
};

export default About;