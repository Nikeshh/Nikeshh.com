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
            <main>
                <section>
                    <div className="float-end">
                        <i className="fa fa-info-circle"></i>
                    </div>
                    <div className="row">
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
                    <div>
                        <i class="fa fa-mouse-pointer"></i>
                        <span>Scroll Down</span>
                        <i className="fas fa-comment-dots float-end"></i>
                    </div>
                </section>
                <section>
                    <div>
                        <p>DEEP DIVE INTO MY LIFE</p>
                        <h3>My Story</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={"/logo192.png"} alt="my_story" />
                        </div>
                        <div className="col-lg-8">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Etiam at ultricies dui, eu mattis nisl. Etiam placerat orci 
                                eu tortor euismod, quis vehicula velit dictum. 
                                Morbi vehicula, tortor et cursus sollicitudin, massa lectus 
                                ornare lectus, ut gravida eros velit a libero. In a eros felis. 
                                Sed a ex a ante ultricies fermentum ac eget nibh. 
                                Maecenas nec odio volutpat, scelerisque leo non, 
                                efficitur mauris. Proin placerat laoreet nunc a vulputate. 
                                Aenean ac mauris lobortis, condimentum tortor sed, 
                                ultrices est. Integer luctus dictum enim sit amet cursus. 
                                Nunc dictum finibus odio sit amet luctus. Maecenas 
                                tristique nisl magna, sit amet vulputate lectus bibendum in. 
                                Phasellus quis tempor leo, in ultrices tortor. 
                                In vitae ante molestie, vestibulum orci ac, fringilla velit. 
                                Class aptent taciti sociosqu ad litora torquent per 
                                conubia nostra, per inceptos himenaeos.
                            </p>
                            <button>WANT MORE OF MY LIFE? READ MORE</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default HomeScreen;