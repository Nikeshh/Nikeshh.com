import React from "react";
import "./landing.css";
import line from "../../images/line.png";

const Landing = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <span>HI. WELCOME TO MY SITE.</span>
                    <div>
                        <h3>I'm, Nikeshh Vijayabaskaran</h3>
                        <img src={line} alt="Line" />
                    </div>
                    <div>
                        <h6>Full-Stack Developer, Mentor, Proud Son</h6>
                        <h6>Hardcore coder and Creative most approachable teammate</h6>
                    </div>
                    <div>
                        <p>I design, code and rebuild the software from scratch that can scale 100x, and I love what I do every day.</p>
                        <p>I'm available for freelancer opportunities as well.</p>
                    </div>
                    <div>
                        <h5 className="landing_email">Email: <span className="email">nikeshhbaskaran01@gmail.com</span></h5>
                        <h5 className="landing_phone_number">Phone number: <span className="phone_number">+1 416 834 5350</span></h5>
                    </div>
                    <div className="social-icons">
                        <a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                    <div className="landing-actions">
                        <button className="btn btn-warning"><i className="fa-solid fa-paper-plane"></i><span>Hire Me</span></button>
                        <button className="btn btn-warning"><i className="fa-solid fa-download"></i><span>Download CV</span></button>
                        <button className="btn btn-warning"><i className="fa-solid fa-angles-down"></i><span>Download Newsletter</span></button>
                    </div>
                </div>
                <div className="col-lg-5">
                    <img src={"./assets/images/loading.gif"} alt="Landing Image" width="500px" />
                </div>
            </div>
            <div className="comment_and_info">
                <a href="#" className="social-icon"><i className="fa-solid fa-comment"></i></a>
                <a href="#" className="social-icon"><i className="fa-solid fa-info"></i></a>
            </div>
        </div>
    );
}

export default Landing;