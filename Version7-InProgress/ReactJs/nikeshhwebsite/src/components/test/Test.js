import React from "react";
import './test.css';

const Test = () => {
    return (
        <div className="test">
            <nav className="sidebar">
                <div className="logo-with-text">
                    <img src={"/assets/images/testlogo.png"} alt="Logo" className="logo" />
                    <div className="logo-text">
                        <span className="title">CodingLab</span>
                        <span className="subtitle">Web Developer</span>
                    </div>
                </div>
            </nav>
            <div className="home">
                <h1>Dashboard</h1>
            </div>
        </div>
    );
};

export default Test;