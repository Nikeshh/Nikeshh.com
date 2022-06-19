import React from "react";
import "./skillsandservices.css";
import Skill from "./skillsandservices/Skill";

const SkillsAndServices = () => {
    return (
        <div className="skillsandservices">
            <div style={{ marginBottom: '100px' }}>
                <span className="title">Skills And Services</span>
                <h3 className="subtitle">What Am I Capable Of?</h3>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col" style={{ display:'flex', justifyContent: 'center' }}>
                        <Skill />
                    </div>
                    <div className="col" style={{ display:'flex', justifyContent: 'center' }}>
                        <Skill />
                    </div>
                    <div className="col" style={{ display:'flex', justifyContent: 'center' }}>
                        <Skill />
                    </div>
                </div>
                <div className="row" style={{ marginTop: "30px" }}>
                    <div className="col" style={{ display:'flex', justifyContent: 'center' }}>
                        <Skill />
                    </div>
                    <div className="col" style={{ display:'flex', justifyContent: 'center' }}>
                        <Skill />
                    </div>
                    <div className="col" style={{ display:'flex', justifyContent: 'center' }}>
                        <Skill />
                    </div>
                </div>
                <div className="row" style={{ marginTop: "30px" }}>
                    <div className="col" style={{ display:'flex', justifyContent: 'center' }}>
                        <Skill />
                    </div>
                    <div className="col" style={{ display:'flex', justifyContent: 'center' }}>
                        <Skill />
                    </div>
                    <div className="col" style={{ display:'flex', justifyContent: 'center' }}>
                        <Skill />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsAndServices;