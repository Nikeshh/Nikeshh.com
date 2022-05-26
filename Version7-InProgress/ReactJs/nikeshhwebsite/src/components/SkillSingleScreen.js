import React from "react";
import SkillSingle from "./skillsingle/SkillSingle";
import Footer from "./util/Footer";
import Header from "./util/Header";

const SkillSingleScreen = () => {
    return (
        <>
            <div className="header__image"  style={{ marginBottom: "1500px" }}>
                <Header page_name="skillsingle" />
                <SkillSingle />
            </div>
            <Footer />
        </>
    );
}

export default SkillSingleScreen;