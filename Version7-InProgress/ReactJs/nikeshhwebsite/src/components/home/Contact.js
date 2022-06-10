import React from "react";
import './contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <span className="title">Say Hello / Hire Me</span>
            <h3 className="subtitle">Get In Touch! I Love To Meet People!</h3>
            <p>I love to meet and collaborate with people from various domains and expertise.</p>
            <p>I am always available for a coffee if you are in Toronto, Canada.</p>
            <p>I am also available to freelance.</p>
            <div className="row">
                <div className="col-md-4">
                    <img src={"./assets/images/loading.gif"} alt="Landing Image" width="500px" />
                </div>
                <div className="col-md-8">
                    <div className="card" style={{ width: "50rem", height: "30rem", borderTopLeftRadius: "80px" }}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 input-group">
                                    <span className="input-group-text"><i className="fa-solid fa-message"></i></span>
                                    <input id="firstName" type="text" class="form-control" placeholder="Your first name" />
                                </div>
                                <div className="col-md-6 input-group">
                                    <span className="input-group-text"><i className="fa-solid fa-message"></i></span>
                                    <input id="lastName" type="text" class="form-control" placeholder="Your last name" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 input-group">
                                    <span className="input-group-text"><i className="fa-solid fa-message"></i></span>
                                    <input id="emailid" type="email" class="form-control" placeholder="Your email id" />
                                </div>
                                <div className="col-md-6 input-group">
                                    <span className="input-group-text"><i className="fa-solid fa-message"></i></span>
                                    <input id="phonenumber" type="tel" class="form-control" placeholder="Your phone number" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 input-group contact-input">
                                    <span className="input-group-text"><i className="fa-solid fa-message"></i></span>
                                    <input id="reasonofcontact" type="text" class="form-control" placeholder="Your reason of contact" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 input-group message">
                                    <span className="input-group-text"><i className="fa-solid fa-message"></i></span>
                                    <input id="message" type="text" class="form-control" placeholder="Your message" />
                                </div>
                            </div>
                            <div className="submit">
                                <button className="btn btn-warning"><span>Submit</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;