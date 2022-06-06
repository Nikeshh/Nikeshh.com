import React from "react";
import Header from "./util/Header";
import Footer from "./util/Footer";
import Projects from "./projects/Projects";

const ProjectsScreen = () => {
    return (
        <>
            <div className="header__image"  style={{ marginBottom: "300px" }}>
                <Header page_name="projects" />
                <Projects />
            </div>
            <Footer />
        </>
    );
}

export default ProjectsScreen;