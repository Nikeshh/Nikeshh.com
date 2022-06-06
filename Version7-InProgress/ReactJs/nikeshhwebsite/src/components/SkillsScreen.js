import React from "react";
import Skills from "./skills/Skills";
import Footer from "./util/Footer";
import Header from "./util/Header";

const SkillsScreen = () => {
    return (
        <>
            <div className="header__image"  style={{ marginBottom: "1500px" }}>
                <Header page_name="skills" />
                <Skills />
            </div>
            <Footer />
        </>
    );
}

export default SkillsScreen;