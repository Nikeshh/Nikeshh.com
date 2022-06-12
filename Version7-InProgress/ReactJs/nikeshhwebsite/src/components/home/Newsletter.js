import React from "react";
import "./newsletter.css";

const Newsletter = () => {
    return (
        <div className="newsletter">
            <div className="row">
                <div className="col-md-8">
                    <span className="title">Newsletter</span>
                    <h3 className="subtitle">I WRITE ON TOPICS LIKE TECHNOLOGY, CODING, PRODUCT DEVELOPMENT ETC</h3>
                </div>
                <div className="col-md-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <button className="btn btn-warning"><span>DOWNLOAD NEWSLETTERS</span></button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h3>Newsletter Signup</h3>
                </div>
                <div className="col-md-8">
                </div>
            </div>
        </div>
    );
}

export default Newsletter;