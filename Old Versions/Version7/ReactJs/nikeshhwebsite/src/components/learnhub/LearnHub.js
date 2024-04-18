import React from "react";
import "./learnhub.css";
import LearnHubCard from "./LearnHubCard";

const LearnHub = () => {
    return (
        <div className="learnhub">
            <div className="learnhub-header">
                <div className="row">
                    <div className="col-lg-7" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h1 style={{ fontFamily: "'Dancing Script', cursive", fontWeight: '700' }}>Welcome To Nikeshh Learn Hub</h1>
                        <h1 style={{ fontWeight: '700' }}>A Better Learning Portal</h1>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            This hub contains the content I have learned, and it also includes various tutorials, 
                            complete builds, master lessons and much more. I love sharing. Gear up for learning.
                        </p>
                        <div style={{ marginBottom: '10px' }}>
                            <input type="text" placeholder="Search..." style={{ padding: '10px', borderRadius: '5px', marginRight: '5px' }} />
                            <i className="fa fa-search" style={{ padding: '15px', border: '1px solid black', borderRadius: '5px' }}></i>
                        </div>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Suggestions: <span style={{ textDecoration: 'underline' }}>Data Structures</span> <span style={{ textDecoration: 'underline' }}>Discrete Mathematics</span>
                        </p>
                        <div>
                            <button className="btn btn-warning" style={{ marginRight: '10px' }}>Learn More</button>
                            <button className="btn btn-warning">Create a account</button>
                        </div>
                    </div>
                    <div className="col-lg-5" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <img src={"./assets/images/loading.gif"} alt="Landing Image" style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
            <div className="learnhub-content" style={{ marginTop: '100px' }}>
                <div className="learnhub-content-header">
                    <ul>
                        <li>Home</li>
                        <li>Tutorials</li>
                        <li>Master Lessons</li>
                        <li>Full Builds</li>
                        <li>...</li>
                    </ul>
                    <div style={{ marginRight: '10px' }}>
                        <button className="btn btn-warning" style={{ marginRight: '10px' }}>Login</button>
                        <button className="btn btn-warning" style={{ marginRight: '10px' }}>Register</button>
                        <button className="btn btn-warning"><input type="text" placeholder="Search..." style={{ padding: '5px', borderRadius: '5px', borderStyle: 'dashed' }} /><i className="fa fa-search" style={{ marginLeft: '10px' }}></i></button>
                    </div>
                </div>
                <div className="single-learn" style={{ marginTop: '50px' }}>
                    <div className="learn-title-with-tags">
                        <h3 className="left" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '700' }}>Tutorials</h3>
                        <div style={{ display: 'flex' }}>
                            <p style={{ marginRight: '10px', fontWeight: '700' }}>WEB DEVELOPMENT</p>
                            <p style={{ marginRight: '10px', fontWeight: '700' }}>APP DEVELOPMENT</p>
                        </div>
                    </div>
                    <div className="learn">
                        <div className="row">
                            <div className="col-lg-4">
                                <LearnHubCard />
                            </div>
                            <div className="col-lg-4">
                                <LearnHubCard />
                            </div>
                            <div className="col-lg-4">
                                <LearnHubCard />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '50px' }}>
                            <div className="col-lg-4">
                                <LearnHubCard />
                            </div>
                            <div className="col-lg-4">
                                <LearnHubCard />
                            </div>
                            <div className="col-lg-4">
                                <LearnHubCard />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '50px' }}>
                            <div className="col-lg-4">
                                <LearnHubCard />
                            </div>
                            <div className="col-lg-4">
                                <LearnHubCard />
                            </div>
                            <div className="col-lg-4">
                                <LearnHubCard />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-learn" style={{ marginTop: '50px' }}>
                    <div className="learn-title-with-tags">
                        <h3 className="left" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '700' }}>Full Builds</h3>
                        <div style={{ display: 'flex' }}>
                            <p style={{ marginRight: '10px', fontWeight: '700' }}>WEB DEVELOPMENT</p>
                            <p style={{ marginRight: '10px', fontWeight: '700' }}>APP DEVELOPMENT</p>
                        </div>
                    </div>
                    <div className="learn">
                        <div className="row">
                            <div className="col-lg-4">
                                <LearnHubCard />
                            </div>
                            <div className="col-lg-4">
                                <LearnHubCard />
                            </div>
                            <div className="col-lg-4">
                                <LearnHubCard />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '50px' }}>
                            <div className="col-lg-4">
                                <LearnHubCard />
                            </div>
                            <div className="col-lg-4">
                                <LearnHubCard />
                            </div>
                            <div className="col-lg-4">
                                <LearnHubCard />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '50px' }}>
                            <div className="col-lg-4">
                                <LearnHubCard />
                            </div>
                            <div className="col-lg-4">
                                <LearnHubCard />
                            </div>
                            <div className="col-lg-4">
                                <LearnHubCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LearnHub;