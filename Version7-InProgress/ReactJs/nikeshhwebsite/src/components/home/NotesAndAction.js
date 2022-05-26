import React from "react";
import "./notesandaction.css";

const NotesAndAction = () => {
    return (
        <div className="notesandaction">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <p>
                            I love constructive criticism. I am open to comments and suggestions for my projects.
                            Don’t hesitate to send me a message.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-warning"><i className="fa-solid fa-paper-plane"></i><span>Send a message</span></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <p>
                            I follow a special style of the process to complete my projects in an efficient way
                        </p>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-warning"><i className="fa-solid fa-paper-plane"></i><span>Check Here</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotesAndAction;