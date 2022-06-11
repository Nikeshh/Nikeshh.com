import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <div className="footer container">
            <div className="row">
                <div className="col-md-4">
                    <div className="footer_logo" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <img src={"/assets/images/loading.gif"} alt="logo" width="100px" />
                        <span style={{ fontWeight: '700', fontSize: '25px' }}>Nikeshh Vijayabaskaran</span>
                    </div>
                    <div className="social-icons" style={{ marginTop: '10px', marginLeft: '100px' }}>
                        <a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
                <div className="col-md-2">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Works</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul>
                        <li>Testimonials</li>
                        <li>Mentorship</li>
                        <li>Blog</li>
                        <li>Support</li>
                        <li>Say Hello / Hire Me</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul>
                        <li>Terms of use</li>
                        <li>Privacy Policy</li>
                        <li>Terms and conditions</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <button style={{ backgroundColor: '#FF946D', borderRadius: '10px', padding: '5px' }}>
                        <span>Info about this website development</span>
                    </button>
                </div>
            </div>
            <div style={{ textAlign: "center", marginTop: '10px' }}>
                <p style={{ fontStyle: 'italic' }}>Copyright 2022. Handcrafted with &#9829; by Nikeshh Vijayabaskaran.</p>
            </div>
        </div>
    );
}

export default Footer;