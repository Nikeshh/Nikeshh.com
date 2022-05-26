import React from "react";
import "./skillsandservices.css";
import Skills from "./skillsandservices/Skills";

const SkillsAndServices = () => {
    return (
        <div className="skillsandservices">
            <span className="title">Skills And Services</span>
            <h3 className="subtitle">What Am I Capable Of?</h3>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Skills />
                    </div>
                    <div className="col">
                        <Skills />
                    </div>
                    <div className="col">
                        <Skills />
                    </div>
                </div>
                <div className="row" style={{ marginTop: "20px" }}>
                    <div className="col">
                        <Skills />
                    </div>
                    <div className="col">
                        <Skills />
                    </div>
                    <div className="col">
                        <Skills />
                    </div>
                </div>
                <div className="row" style={{ marginTop: "20px" }}>
                    <div className="col">
                        <Skills />
                    </div>
                    <div className="col">
                        <Skills />
                    </div>
                    <div className="col">
                        <Skills />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsAndServices;