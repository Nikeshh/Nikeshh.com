import React from "react";
import Header from "./util/Header";
import Footer from "./util/Footer";
import Projects from "./projects/Projects";

const ProjectsScreen = () => {
    return (
        <>
            <Header page_name="projects" />
            <Projects />
            <Footer />
        </>
    );
}

export default ProjectsScreen;