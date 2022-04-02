import React from "react";

const HomeScreen = () => {
    return (
        <>
            <div id="header" className="d-flex">
                <img src={"/logo192.png"} alt="logo" />
                <h1>Nikeshh V</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Works</li>
                    <li>Testimonials</li>
                    <li>Mentorship</li>
                    <li>Blog</li>
                    <li>Support</li>
                    <li>SAY HELLO / HIRE ME</li>
                    <li>Profile</li>
                </ul>
            </div>
            <div className="row d-flex">
                <div className="col-lg-8">
                    <div>
                        <p>Hi, symbol! Welcome to my site!</p>
                        <h2>I'm Nikeshh Vijayabaskaran</h2>
                        <h2>Full-Stack Developer, Mentor, Proud Son, Hardcore coder and Creative most approachable teammate</h2>
                        <p>I design, code and rebuild the software from scratch that can scale 100x, and I love what I do every day.</p>
                        <p>I’m available for freelance opportunities as well.</p>
                        <h4>Email: nikeshhbaskaran01@gmail.com</h4>
                        <h4>Phone number: +1 416 834 5350</h4>
                    </div>
                    <div>
                        <ul>
                            <li>LinkedIn</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Discord</li>
                            <li>Slack</li>
                            <li>Email</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>HIRE ME</li>
                            <li>DOWNLOAD CV</li>
                            <li>DOWNLOAD NEWSLETTER</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <img src={"/logo192.png"} alt="logo" />
                </div>
            </div>
        </>
    );
}

export default HomeScreen;