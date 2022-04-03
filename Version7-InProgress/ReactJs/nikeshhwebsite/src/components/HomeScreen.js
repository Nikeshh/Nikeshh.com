import React from "react";
import Projects from "./home/Projects";
import ReadMyWritings from "./home/ReadMyWritings";
import SkillsAndServices from "./home/SkillsAndServices";
import Testimonials from "./home/Testimonials";

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
                <section>
                    <div>
                        <p>SKILLS AND SERVICES</p>
                        <h3>What am I capable of?</h3>
                    </div>
                    <div className="row justify-content-between">
                        <SkillsAndServices />
                    </div>
                    <div className="row justify-content-between">
                        <SkillsAndServices />
                    </div>
                    <div className="row justify-content-between">
                        <SkillsAndServices />
                    </div>
                </section>
                <section>
                    <div>
                        <p>PROJECTS / WORKS</p>
                        <h3>What have I done?</h3>
                    </div>
                    <h4>Web Development</h4>
                    <div className="row justify-content-between">
                        <Projects />
                    </div>
                    <h4>App Development</h4>
                    <div className="row justify-content-between">
                        <Projects />
                    </div>
                    <p>
                        I love constructive criticism. I am open to comments and suggestions for my projects. Don’t hesitate to send me a message.
                    </p>
                    <button>Check here</button>
                    <p>
                        I follow a special style of the process to complete my projects in an efficient way.
                    </p>
                    <button>Check here</button>
                </section>
                <section>
                    <div>
                        <p>TESTIMONIALS</p>
                        <h3>SEE WHAT OTHERS SAID ABOUT ME</h3>
                    </div>
                    <div className="row justify-content-between">
                        <Testimonials />
                    </div>
                </section>
                <section>
                    <div>
                        <p>MENTORSHIP / ONE-TO-ONE TUTORING</p>
                        <h3>I LIKE TO HELP YOU</h3>
                    </div>
                    <div>
                        <h3>Want any help or advice or tutoring? I can help you out.</h3>
                        <p>Don’t hesitate! Just drop a message and I will get to you as soon as possible.</p>
                        <button>Start a conversation</button>
                    </div>
                </section>
                <section>
                    <div>
                        <p>BLOG</p>
                        <h3>READ SOME OF MY WRITINGS</h3>
                    </div>
                    <div className="row justify-content-between">
                        <ReadMyWritings />
                    </div>
                </section>
                <section>
                    <div>
                        <p>SUPPORT</p>
                        <h3>LIKE MY WORK?</h3>
                        <p>IF YOU LIKE MY WORK, YOU CAN ALWAYS SUPPORT ME USING THE FOLLOWING LINKS</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <h4>Patreon</h4>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <h4>Buy me a coffee</h4>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <button>Know More</button>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <p>SAY HELLO / HIRE ME</p>
                        <h3>GET IN TOUCH! I LOVE TO MEET PEOPLE!</h3>
                        <p>
                            I LOVE TO MEET AND COLLABORATE WITH PEOPLE FROM VARIOUS DOMAINS AND EXPERTISE!
                            I AM ALWAYS AVAILABLE FOR A COFFEE IF YOU ARE IN TORONTO, CANADA
                            I AM ALSO AVAILABLE TO FREELANCE!
                        </p>
                        <div className="row">
                            <div className="col-lg-4">
                                <img src={"/logo192.png"} alt="logo" />
                            </div>
                            <div className="col-lg-8">
                                <form>
                                    <input type="text" id="first_name" placeholder="FIRST NAME" />
                                    <input type="text" id="last_name" placeholder="LAST NAME" />
                                    <input type="email" id="email" placeholder="EMAIL ID" style={{ display: "block" }} />
                                    <input type="tel" id="phone_number" placeholder="PHONE NUMBER" />
                                    <input type="tel" id="reason_for_contact" placeholder="REASON FOR CONTACT" />
                                    <input type="tel" id="message" placeholder="MESSAGE" style={{ display: "block" }} />
                                    <button>SUBMIT</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="footer" className="d-flex">
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
                <hr />
                <div className="d-flex">
                    <p>TERMS OF USE</p>
                    <i className="fa fa-info"></i>
                    <p>INFO ABOUT WEBSITE</p>
                    <ul>
                        <li>LinkedIn</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Discord</li>
                        <li>Slack</li>
                        <li>Email</li>
                    </ul>
                    <p>COPYRIGHT 2022. MADE WITH LOVE BY NIKESHH VIJAYABASKARAN.</p>
                </div>
            </main>
        </>
    );
}

export default HomeScreen;