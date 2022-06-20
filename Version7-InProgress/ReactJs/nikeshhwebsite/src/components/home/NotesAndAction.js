import React from "react";
import "./notesandaction.css";

const NotesAndAction = () => {
    return (
        <div className="notesandaction" style={{ marginTop: '100px' }}>
            <div className="container">
                <div className="row">
                    <div className="notes col-xs-12 col-md-6">
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontStyle: 'italic' }}>
                            I love constructive criticism. I am <b>open to comments and suggestions</b> for my projects.
                            Don’t hesitate to send me a message.
                        </p>
                        <button className="btn btn-warning" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '700', letterSpacing: '5px', wordSpacing: '10px' }}><span>SEND A MESSAGE</span></button>
                    </div>
                    <div className="notes col-xs-12 col-md-6">
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontStyle: 'italic' }}>
                            I follow a <b>special style</b> of the process to complete my projects in an efficient way
                        </p>
                        <button className="btn btn-warning" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '700', letterSpacing: '5px', wordSpacing: '10px' }}><span>CHECK HERE</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotesAndAction;