import React from "react";
import Skills from "./skills/Skills";
import Footer from "./util/Footer";
import Header from "./util/Header";

const SkillsScreen = () => {
    return (
        <>
            <Header page_name="skills" />
            <Skills />
            <Footer />
        </>
    );
}

export default SkillsScreen;