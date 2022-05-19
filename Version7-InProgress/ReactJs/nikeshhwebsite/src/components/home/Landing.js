import React from "react";

const Landing = () => {
    return (
        <div className="container landing">
            <span>HI. WELCOME TO MY SITE.</span>
            <h3>I'm, Nikeshh Vijayabaskaran</h3>
            <h6>Full-Stack Developer, Mentor, Proud Son</h6>
            <h6>Hardcore coder and Creative most approachable teammate</h6>
            <p>I design, code and rebuild the software from scratch that can scale 100x, and I love what I do every day.</p>
            <p>I'm available for freelancer opportunities as well.</p>
            <h5>Email: <span>nikeshhbaskaran01@gmail.com</span></h5>
            <h5>Phone number: <span>+1 416 834 5350</span></h5>
            <div className="social-icons">
                <a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
            </div>
            <div className="landing-actions">
                <button className="btn"><i class="fa-brands fa-hive"></i>Hire Me</button>
                <button className="btn"><i class="fa-solid fa-download"></i>Download CV</button>
                <button className="btn"><i class="fa-solid fa-angles-down"></i>Download Newsletter</button>
            </div>
        </div>
    );
}

export default Landing;