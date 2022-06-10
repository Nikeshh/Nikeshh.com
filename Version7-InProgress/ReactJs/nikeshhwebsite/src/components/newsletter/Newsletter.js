import React from "react";
import "./newsletter.css";
import line from "../../images/line.png";

const Newsletter = () => {
    return (
        <div className="newsletter">
            <div className="newsletter_signup">
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
            </div>
            <div className="newsletter_downloads">
                <div className="newsletter_downloads_header">
                    <h2>Newsletter Downloads</h2>
                    <img src={line} alt="Line" className="newsletter_downloads_line" />
                </div>
                <div className="newsletter_downloads_content">
                    <div className="row">
                        <div className="col-lg-4 content_number">
                            <p>01</p>
                        </div>
                        <div className="col-lg-4 content_metadata">
                            <h5>Orgaize the Content Moderators</h5>
                            <h6>Eric Ravensoft in UI / UX Design</h6>
                            <p>MAR 20 &bull; 5 MIN READ</p>
                        </div>
                        <div className="col-lg-4 content_actions">
                            <div>
                                <button className="preview">Preview</button>
                                <button className="download">Download</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;