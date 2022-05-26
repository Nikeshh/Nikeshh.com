import React from "react";
import "./projectsandworks.css";
import Projects from "./projectsandworks/Projects";

const ProjectsAndWorks = () => {
    return (
        <div className="projectsandworks">
            <span className="title">Projects / Works</span>
            <h3 className="subtitle">What Have I Done?</h3>
            <div className="container">
                <Projects name="Web Development" />
                <Projects name="App Development" />
            </div>
        </div>
    );
}

export default ProjectsAndWorks;