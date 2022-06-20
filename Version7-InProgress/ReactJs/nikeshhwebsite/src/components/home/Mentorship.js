import React from "react";
import "./mentorship.css";
import line from "../../images/line.png";

const Mentorship = () => {
    return (
        <div className="mentorship">
            <span className="title">Mentorship / One-To-One Tutoring</span>
            <h3 className="subtitle">I Like To Help You</h3>
            <div className="row content" style={{ marginTop: '50px' }}>
                <div className="content_with_line" style={{ position: 'relative' }}>
                    <h3 style={{ fontFamily: "'Montserrat', sans-serif" }}>Want any help or advice or tutoring?</h3>
                    <img src={line} alt="Line" style={{ position: 'absolute', left: '30%', top: '80%' }} width="200px" />
                </div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif" }}>I can help you out.</h3>
                <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '40px', marginTop: '20px' }}>
                    Don't hesistate! Just <div className="drop_a_message"><b style={{ border: '2px dashed black', padding: '10px' }}>drop a message</b></div> and I will get to you as soon as possible.
                </p>
                <div className="button_with_line" style={{ marginTop: '50px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
                    <button className="btn btn-warning"><span>Start a conversation</span></button>
                </div>
            </div>
        </div>
    );
}

export default Mentorship;