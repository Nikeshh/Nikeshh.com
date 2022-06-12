import React from "react";
import "./learnhub.css";

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
                        <div style={{ padding: '5px', display: 'block' }}>
                            <button>
                                Search
                                <i className="fa fa-search"></i>
                            </button>
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
                        <img src={"./assets/images/loading.gif"} alt="Landing Image" width="500px" />
                    </div>
                </div>
            </div>
            <div className="learnhub-content">
                <div className="learnhub-content-header">
                    <ul>
                        <li>HOME</li>
                        <li>TUTORIALS</li>
                        <li>MASTER LESSONS</li>
                        <li>FULL BUILDS</li>
                        <li>MORE</li>
                        <li>LOGIN</li>
                        <li>REGISTER</li>
                    </ul>
                </div>
                <div className="learn-content-subheader">
                    <p>CONTENT</p>
                    <div className="underline"><h3>I HOPE THE BELOW CONTENT WILL HELP YOU OUT</h3></div>
                </div>
                <div className="single-learn">
                    <div className="learn-title-with-tags">
                        <div className="learn-title">
                            <h3>TUTORIALS</h3>
                        </div>
                        <div className="learn-tags">
                            <ul>
                                <li><i className="fa fa-star"></i>All</li>
                                <li>Web Development</li>
                                <li>App Development</li>
                            </ul>
                        </div>
                    </div>
                    <div className="learn">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card" style={{ width: '22rem' }}>
                                    <img className="card-img-top" src={"./assets/images/loading.gif"} alt="Main Featued Image" />
                                    <div className="card-body">
                                        <div className="metadata">
                                            <div className="post-date">
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                <span>20 MAR 2022</span>
                                            </div>
                                            <div className="author">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                <span>Nikeshh</span>
                                            </div>
                                            <div className="post-read-time">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5 min read</span>
                                            </div>
                                            <div className="post-likes">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5.2K Likes</span>
                                            </div>
                                        </div>
                                        <div className="learn-tags">
                                            <ul>
                                                <li><i className="fa fa-star"></i>All</li>
                                                <li>Web</li>
                                            </ul>
                                        </div>
                                        <h4>Data Structures and Algorithms</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>View</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card" style={{ width: '22rem' }}>
                                    <img className="card-img-top" src={"./assets/images/loading.gif"} alt="Main Featued Image" />
                                    <div className="card-body">
                                        <div className="metadata">
                                            <div className="post-date">
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                <span>20 MAR 2022</span>
                                            </div>
                                            <div className="author">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                <span>Nikeshh</span>
                                            </div>
                                            <div className="post-read-time">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5 min read</span>
                                            </div>
                                            <div className="post-likes">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5.2K Likes</span>
                                            </div>
                                        </div>
                                        <div className="learn-tags">
                                            <ul>
                                                <li><i className="fa fa-star"></i>All</li>
                                                <li>Web</li>
                                            </ul>
                                        </div>
                                        <h4>Data Structures and Algorithms</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>View</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card" style={{ width: '22rem' }}>
                                    <img className="card-img-top" src={"./assets/images/loading.gif"} alt="Main Featued Image" />
                                    <div className="card-body">
                                        <div className="metadata">
                                            <div className="post-date">
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                <span>20 MAR 2022</span>
                                            </div>
                                            <div className="author">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                <span>Nikeshh</span>
                                            </div>
                                            <div className="post-read-time">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5 min read</span>
                                            </div>
                                            <div className="post-likes">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5.2K Likes</span>
                                            </div>
                                        </div>
                                        <div className="learn-tags">
                                            <ul>
                                                <li><i className="fa fa-star"></i>All</li>
                                                <li>Web</li>
                                            </ul>
                                        </div>
                                        <h4>Data Structures and Algorithms</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>View</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card" style={{ width: '22rem' }}>
                                    <img className="card-img-top" src={"./assets/images/loading.gif"} alt="Main Featued Image" />
                                    <div className="card-body">
                                        <div className="metadata">
                                            <div className="post-date">
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                <span>20 MAR 2022</span>
                                            </div>
                                            <div className="author">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                <span>Nikeshh</span>
                                            </div>
                                            <div className="post-read-time">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5 min read</span>
                                            </div>
                                            <div className="post-likes">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5.2K Likes</span>
                                            </div>
                                        </div>
                                        <div className="learn-tags">
                                            <ul>
                                                <li><i className="fa fa-star"></i>All</li>
                                                <li>Web</li>
                                            </ul>
                                        </div>
                                        <h4>Data Structures and Algorithms</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>View</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card" style={{ width: '22rem' }}>
                                    <img className="card-img-top" src={"./assets/images/loading.gif"} alt="Main Featued Image" />
                                    <div className="card-body">
                                        <div className="metadata">
                                            <div className="post-date">
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                <span>20 MAR 2022</span>
                                            </div>
                                            <div className="author">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                <span>Nikeshh</span>
                                            </div>
                                            <div className="post-read-time">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5 min read</span>
                                            </div>
                                            <div className="post-likes">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5.2K Likes</span>
                                            </div>
                                        </div>
                                        <div className="learn-tags">
                                            <ul>
                                                <li><i className="fa fa-star"></i>All</li>
                                                <li>Web</li>
                                            </ul>
                                        </div>
                                        <h4>Data Structures and Algorithms</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>View</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card" style={{ width: '22rem' }}>
                                    <img className="card-img-top" src={"./assets/images/loading.gif"} alt="Main Featued Image" />
                                    <div className="card-body">
                                        <div className="metadata">
                                            <div className="post-date">
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                <span>20 MAR 2022</span>
                                            </div>
                                            <div className="author">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                <span>Nikeshh</span>
                                            </div>
                                            <div className="post-read-time">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5 min read</span>
                                            </div>
                                            <div className="post-likes">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5.2K Likes</span>
                                            </div>
                                        </div>
                                        <div className="learn-tags">
                                            <ul>
                                                <li><i className="fa fa-star"></i>All</li>
                                                <li>Web</li>
                                            </ul>
                                        </div>
                                        <h4>Data Structures and Algorithms</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>View</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card" style={{ width: '22rem' }}>
                                    <img className="card-img-top" src={"./assets/images/loading.gif"} alt="Main Featued Image" />
                                    <div className="card-body">
                                        <div className="metadata">
                                            <div className="post-date">
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                <span>20 MAR 2022</span>
                                            </div>
                                            <div className="author">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                <span>Nikeshh</span>
                                            </div>
                                            <div className="post-read-time">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5 min read</span>
                                            </div>
                                            <div className="post-likes">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5.2K Likes</span>
                                            </div>
                                        </div>
                                        <div className="learn-tags">
                                            <ul>
                                                <li><i className="fa fa-star"></i>All</li>
                                                <li>Web</li>
                                            </ul>
                                        </div>
                                        <h4>Data Structures and Algorithms</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>View</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card" style={{ width: '22rem' }}>
                                    <img className="card-img-top" src={"./assets/images/loading.gif"} alt="Main Featued Image" />
                                    <div className="card-body">
                                        <div className="metadata">
                                            <div className="post-date">
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                <span>20 MAR 2022</span>
                                            </div>
                                            <div className="author">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                <span>Nikeshh</span>
                                            </div>
                                            <div className="post-read-time">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5 min read</span>
                                            </div>
                                            <div className="post-likes">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5.2K Likes</span>
                                            </div>
                                        </div>
                                        <div className="learn-tags">
                                            <ul>
                                                <li><i className="fa fa-star"></i>All</li>
                                                <li>Web</li>
                                            </ul>
                                        </div>
                                        <h4>Data Structures and Algorithms</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>View</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card" style={{ width: '22rem' }}>
                                    <img className="card-img-top" src={"./assets/images/loading.gif"} alt="Main Featued Image" />
                                    <div className="card-body">
                                        <div className="metadata">
                                            <div className="post-date">
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                <span>20 MAR 2022</span>
                                            </div>
                                            <div className="author">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                <span>Nikeshh</span>
                                            </div>
                                            <div className="post-read-time">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5 min read</span>
                                            </div>
                                            <div className="post-likes">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5.2K Likes</span>
                                            </div>
                                        </div>
                                        <div className="learn-tags">
                                            <ul>
                                                <li><i className="fa fa-star"></i>All</li>
                                                <li>Web</li>
                                            </ul>
                                        </div>
                                        <h4>Data Structures and Algorithms</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>View</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-learn">
                    <div className="learn-title-with-tags">
                        <div className="learn-title">
                            <h3>FULL BUILDS</h3>
                        </div>
                        <div className="learn-tags">
                            <ul>
                                <li><i className="fa fa-star"></i>All</li>
                                <li>Web Development</li>
                                <li>App Development</li>
                            </ul>
                        </div>
                    </div>
                    <div className="learn">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card" style={{ width: '22rem' }}>
                                    <img className="card-img-top" src={"./assets/images/loading.gif"} alt="Main Featued Image" />
                                    <div className="card-body">
                                        <div className="metadata">
                                            <div className="post-date">
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                <span>20 MAR 2022</span>
                                            </div>
                                            <div className="author">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                <span>Nikeshh</span>
                                            </div>
                                            <div className="post-read-time">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5 min read</span>
                                            </div>
                                            <div className="post-likes">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5.2K Likes</span>
                                            </div>
                                        </div>
                                        <div className="learn-tags">
                                            <ul>
                                                <li><i className="fa fa-star"></i>All</li>
                                                <li>Web</li>
                                            </ul>
                                        </div>
                                        <h4>Data Structures and Algorithms</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>View</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card" style={{ width: '22rem' }}>
                                    <img className="card-img-top" src={"./assets/images/loading.gif"} alt="Main Featued Image" />
                                    <div className="card-body">
                                        <div className="metadata">
                                            <div className="post-date">
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                <span>20 MAR 2022</span>
                                            </div>
                                            <div className="author">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                <span>Nikeshh</span>
                                            </div>
                                            <div className="post-read-time">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5 min read</span>
                                            </div>
                                            <div className="post-likes">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5.2K Likes</span>
                                            </div>
                                        </div>
                                        <div className="learn-tags">
                                            <ul>
                                                <li><i className="fa fa-star"></i>All</li>
                                                <li>Web</li>
                                            </ul>
                                        </div>
                                        <h4>Data Structures and Algorithms</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>View</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card" style={{ width: '22rem' }}>
                                    <img className="card-img-top" src={"./assets/images/loading.gif"} alt="Main Featued Image" />
                                    <div className="card-body">
                                        <div className="metadata">
                                            <div className="post-date">
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                <span>20 MAR 2022</span>
                                            </div>
                                            <div className="author">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                <span>Nikeshh</span>
                                            </div>
                                            <div className="post-read-time">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5 min read</span>
                                            </div>
                                            <div className="post-likes">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5.2K Likes</span>
                                            </div>
                                        </div>
                                        <div className="learn-tags">
                                            <ul>
                                                <li><i className="fa fa-star"></i>All</li>
                                                <li>Web</li>
                                            </ul>
                                        </div>
                                        <h4>Data Structures and Algorithms</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>View</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card" style={{ width: '22rem' }}>
                                    <img className="card-img-top" src={"./assets/images/loading.gif"} alt="Main Featued Image" />
                                    <div className="card-body">
                                        <div className="metadata">
                                            <div className="post-date">
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                <span>20 MAR 2022</span>
                                            </div>
                                            <div className="author">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                <span>Nikeshh</span>
                                            </div>
                                            <div className="post-read-time">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5 min read</span>
                                            </div>
                                            <div className="post-likes">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5.2K Likes</span>
                                            </div>
                                        </div>
                                        <div className="learn-tags">
                                            <ul>
                                                <li><i className="fa fa-star"></i>All</li>
                                                <li>Web</li>
                                            </ul>
                                        </div>
                                        <h4>Data Structures and Algorithms</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>View</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card" style={{ width: '22rem' }}>
                                    <img className="card-img-top" src={"./assets/images/loading.gif"} alt="Main Featued Image" />
                                    <div className="card-body">
                                        <div className="metadata">
                                            <div className="post-date">
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                <span>20 MAR 2022</span>
                                            </div>
                                            <div className="author">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                <span>Nikeshh</span>
                                            </div>
                                            <div className="post-read-time">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5 min read</span>
                                            </div>
                                            <div className="post-likes">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5.2K Likes</span>
                                            </div>
                                        </div>
                                        <div className="learn-tags">
                                            <ul>
                                                <li><i className="fa fa-star"></i>All</li>
                                                <li>Web</li>
                                            </ul>
                                        </div>
                                        <h4>Data Structures and Algorithms</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>View</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card" style={{ width: '22rem' }}>
                                    <img className="card-img-top" src={"./assets/images/loading.gif"} alt="Main Featued Image" />
                                    <div className="card-body">
                                        <div className="metadata">
                                            <div className="post-date">
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                <span>20 MAR 2022</span>
                                            </div>
                                            <div className="author">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                <span>Nikeshh</span>
                                            </div>
                                            <div className="post-read-time">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5 min read</span>
                                            </div>
                                            <div className="post-likes">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5.2K Likes</span>
                                            </div>
                                        </div>
                                        <div className="learn-tags">
                                            <ul>
                                                <li><i className="fa fa-star"></i>All</li>
                                                <li>Web</li>
                                            </ul>
                                        </div>
                                        <h4>Data Structures and Algorithms</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>View</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card" style={{ width: '22rem' }}>
                                    <img className="card-img-top" src={"./assets/images/loading.gif"} alt="Main Featued Image" />
                                    <div className="card-body">
                                        <div className="metadata">
                                            <div className="post-date">
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                <span>20 MAR 2022</span>
                                            </div>
                                            <div className="author">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                <span>Nikeshh</span>
                                            </div>
                                            <div className="post-read-time">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5 min read</span>
                                            </div>
                                            <div className="post-likes">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5.2K Likes</span>
                                            </div>
                                        </div>
                                        <div className="learn-tags">
                                            <ul>
                                                <li><i className="fa fa-star"></i>All</li>
                                                <li>Web</li>
                                            </ul>
                                        </div>
                                        <h4>Data Structures and Algorithms</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>View</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card" style={{ width: '22rem' }}>
                                    <img className="card-img-top" src={"./assets/images/loading.gif"} alt="Main Featued Image" />
                                    <div className="card-body">
                                        <div className="metadata">
                                            <div className="post-date">
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                <span>20 MAR 2022</span>
                                            </div>
                                            <div className="author">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                <span>Nikeshh</span>
                                            </div>
                                            <div className="post-read-time">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5 min read</span>
                                            </div>
                                            <div className="post-likes">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5.2K Likes</span>
                                            </div>
                                        </div>
                                        <div className="learn-tags">
                                            <ul>
                                                <li><i className="fa fa-star"></i>All</li>
                                                <li>Web</li>
                                            </ul>
                                        </div>
                                        <h4>Data Structures and Algorithms</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>View</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card" style={{ width: '22rem' }}>
                                    <img className="card-img-top" src={"./assets/images/loading.gif"} alt="Main Featued Image" />
                                    <div className="card-body">
                                        <div className="metadata">
                                            <div className="post-date">
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                <span>20 MAR 2022</span>
                                            </div>
                                            <div className="author">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                <span>Nikeshh</span>
                                            </div>
                                            <div className="post-read-time">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5 min read</span>
                                            </div>
                                            <div className="post-likes">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span>5.2K Likes</span>
                                            </div>
                                        </div>
                                        <div className="learn-tags">
                                            <ul>
                                                <li><i className="fa fa-star"></i>All</li>
                                                <li>Web</li>
                                            </ul>
                                        </div>
                                        <h4>Data Structures and Algorithms</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>View</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LearnHub;