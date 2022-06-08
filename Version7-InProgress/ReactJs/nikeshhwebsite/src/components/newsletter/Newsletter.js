import React from "react";
import "./newsletter.css";

const Newsletter = () => {
    return (
        <div className="newsletter">
            <span className="title">Newsletter</span>
            <h3 className="subtitle">I Write On Topics Like Technology, Coding, Product Development Etc</h3>
            <div className="row">
                <div className="col-lg-4">
                    <h3>Newsletter Signup</h3>
                </div>
                <div className="col-lg-8">
                    <div style={{ display: 'flex' }}>
                        <input type="email" id="email_id" name="email_id" placeholder="Your email id" />
                        <i className="fa fa-arrow-right"></i>
                    </div>
                </div>
            </div>
            <div className="newsletter_downloads">
                <h2>Newsletter Downloads</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <p>01</p>
                    </div>
                    <div className="col-lg-4">
                        <h5>Orgaize the Content Moderators</h5>
                        <h6>Eric Ravensoft in UI / UX Design</h6>
                        <p>MAR 20 . 5 MIN READ</p>
                    </div>
                    <div className="col-lg-4">
                        <button>Preview</button>
                        <button>Download</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <p>02</p>
                    </div>
                    <div className="col-lg-4">
                        <h5>Orgaize the Content Moderators</h5>
                        <h6>Eric Ravensoft in UI / UX Design</h6>
                        <p>MAR 20 . 5 MIN READ</p>
                    </div>
                    <div className="col-lg-4">
                        <button>Preview</button>
                        <button>Download</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <p>03</p>
                    </div>
                    <div className="col-lg-4">
                        <h5>Orgaize the Content Moderators</h5>
                        <h6>Eric Ravensoft in UI / UX Design</h6>
                        <p>MAR 20 . 5 MIN READ</p>
                    </div>
                    <div className="col-lg-4">
                        <button>Preview</button>
                        <button>Download</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <p>04</p>
                    </div>
                    <div className="col-lg-4">
                        <h5>Orgaize the Content Moderators</h5>
                        <h6>Eric Ravensoft in UI / UX Design</h6>
                        <p>MAR 20 . 5 MIN READ</p>
                    </div>
                    <div className="col-lg-4">
                        <button>Preview</button>
                        <button>Download</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <p>05</p>
                    </div>
                    <div className="col-lg-4">
                        <h5>Orgaize the Content Moderators</h5>
                        <h6>Eric Ravensoft in UI / UX Design</h6>
                        <p>MAR 20 . 5 MIN READ</p>
                    </div>
                    <div className="col-lg-4">
                        <button>Preview</button>
                        <button>Download</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;