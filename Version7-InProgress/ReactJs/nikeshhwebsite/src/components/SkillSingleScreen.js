import React from "react";
import SkillSingle from "./skillsingle/SkillSingle";
import Footer from "./util/Footer";
import Header from "./util/Header";

const SkillSingleScreen = () => {
    return (
        <>
            <Header page_name="skillsingle" />
            <SkillSingle />
            <Footer />
        </>
    );
}

export default SkillSingleScreen;