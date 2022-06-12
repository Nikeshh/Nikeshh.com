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
            <div className="row" style={{ marginTop: '140px' }}>
                <div className="col-md-4" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ fontWeight: '300', letterSpacing: '3px' }}>Newsletter Signup</h3>
                </div>
                <div className="col-md-8" style={{ backgroundColor: '#DFD7F9', padding: '50px', borderTopLeftRadius: '50px', borderTopRightRadius: '10px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', position: 'relative' }}>
                    <input type="email" id="email_id" name="email_id" placeholder="Your email id" className="form-control"></input>
                    <i class="fa-solid fa-circle-arrow-right fa-2xl" style={{ position: 'absolute', bottom: '15%', right: '1%' }}></i>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;