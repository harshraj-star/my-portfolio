import About from "./About";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router-dom";
import React from "react";



import Navbar from "./Navbar";
import Education from "./Education";
import Skills from "./Skills";
import Interest from "./Interest";
import Certi from "./Certi";
import Projects from "./Projects";
import Resume from "./Resume";
import Social from "./Social";



const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/education" component={Education} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/interest" component={Interest} />
                <Route exact path="/certi" component={Certi} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/social" component={Social} />




                <Redirect to="/" />

            </Switch>



        </>

    );
};

export default App;