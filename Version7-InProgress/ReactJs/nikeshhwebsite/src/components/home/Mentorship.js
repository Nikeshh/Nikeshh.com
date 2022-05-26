import React from "react";
import "./mentorship.css";
import line from "../../images/line.png";

const Mentorship = () => {
    return (
        <div className="mentorship">
            <span className="title">Mentorship / One-To-One Tutoring</span>
            <h3 className="subtitle">I Like To Help You</h3>
            <div className="content">
                <div className="content_with_line">
                    <h3>Want any help or advice or tutoring?</h3>
                    <img src={line} alt="Line" className="line" />
                </div>
                <h3>I can help you out.</h3>
                <p>Don't hesistate! Just drop a message and I will get to you as soon as possible.</p>
                <div className="button_with_line">
                    <button className="btn btn-warning"><span>Start a conversation</span></button>
                    <img src={line} alt="Line" className="line" />
                </div>
            </div>
        </div>
    );
}

export default Mentorship;