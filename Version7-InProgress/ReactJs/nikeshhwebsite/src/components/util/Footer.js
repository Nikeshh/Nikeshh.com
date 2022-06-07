import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <div className="footer container">
            <div className="row">
                <div className="col-md-4">
                    <div className="footer_logo">
                        <img src={"/assets/images/logo.svg"} alt="logo" />
                        <span>Nikeshh V</span>
                    </div>
                    <div className="social-icons">
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
                    <button className="btn btn-warning"><span>Info about this website development</span></button>
                </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <p>Copyright 2022. Made with love by Nikeshh Vijayabaskaran.</p>
            </div>
        </div>
    );
}

export default Footer;