import React from "react";
import "./landing.css";
import line from "../../images/line.png";

const Landing = () => {
    return (
        <div className="landing container" style={{ margin: '200px', width: '100%' }}>
            <div className="row">
                <div className="col-lg-7">
                    <span style={{ color: 'red', fontWeight: '700' }}>Hey.</span>
                    <div style={{ position: 'relative' }}>
                        <h3 style={{ fontSize: '100px', fontWeight: '700' }}>I'm, Nikeshh Vijayabaskaran</h3>
                        <img src={line} alt="Line" className="landing_page_line" />
                    </div>
                    <div className="sub_line">
                        <h6 style={{ fontSize: '30px' }}>Full-Stack Developer x Data Scientist</h6>
                        <h6 style={{ marginBottom: '15px', fontFamily: "'Montserrat', sans-serif" }}>[Artificial Intelligence and Blockchain Enthusiast]</h6>
                        <h6 style={{ fontSize: '30px',  }}>Mentor, Proud Son, Hardcore coder and Creative most approachable teammate</h6>
                    </div>
                    <div className="sub_detail">
                        <p>I design, code and rebuild the software from scratch that can <b><i>scale 100x</i></b>, and I love what I do every day.</p>
                        <p>I'm open for <b><i>freelancing and contracting</i></b> as well.</p>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <h5 className="landing_email"><img src={"/assets/images/email_icon.gif"} width="20px" alt="Email icon" /> <b>nikeshhbaskaran01@gmail.com</b></h5>
                        <h5 className="landing_phone_number"><img src={"/assets/images/phone_icon.gif"} width="20px" alt="Phone icon" /> <b>+1 416 834 5350</b></h5>
                    </div>
                    <div className="social-icons" style={{ marginTop: '30px' }}>
                        <a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                    <div className="landing-actions" style={{ marginTop: '30px' }}>
                        <button className="btn btn-warning"><i className="fa-solid fa-paper-plane"></i><span>Hire Me</span></button>
                        <button className="btn btn-warning"><i className="fa-solid fa-download"></i><span>Download CV</span></button>
                    </div>
                    <div className="landing-actions" style={{ marginTop: '10px' }}>
                        <button className="btn btn-warning"><i className="fa-solid fa-angles-down"></i><span>Download Newsletter</span></button>
                        <button className="btn btn-warning"><i className="fa-solid fa-circle-info"></i><span>This website has a story. Listen.</span></button>
                    </div>
                </div>
                <div className="col-lg-5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={"./assets/images/loading.gif"} alt="Landing Image" width="500px" />
                </div>
            </div>
        </div>
    );
}

export default Landing;