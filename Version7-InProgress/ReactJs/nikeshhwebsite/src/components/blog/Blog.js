import React from "react";
import "./blog.css";

const Blog = () => {
    return (
        <div className="blog">
            <div className="blog-header">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-lg-7">
                            <h1>Welcome To Nikeshh Blog,</h1>
                            <h1>A Tech And Lifestyle Blog</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Etiam at ultricies dui, eu mattis nisl. Etiam placerat orci 
                                eu tortor euismod, quis vehicula velit dictum.
                            </p>
                            <button>Learn More</button>
                            <button>Create a account</button>
                        </div>
                        <div className="col-lg-5">
                            <img src={"./assets/images/loading.gif"} alt="Landing Image" width="500px" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-content">
                <div className="blog-content-header">
                    <ul>
                        <li>Home</li>
                        <li>UI/UX Design</li>
                        <li>Web Development</li>
                        <li>Typography</li>
                        <li>Freelance Business</li>
                        <li>...</li>
                        <li>Login</li>
                        <li>Register</li>
                    </ul>
                    <button>Search<i className="fa fa-search"></i></button>
                </div>
                <div className="blog-content-featured">
                    <div className="blog-content-featured-header">
                        <h3 className="left">Featured For Members</h3>
                        <div className="right">
                            <p className="right">UI/UX DESIGN</p>
                            <p className="right">WEB DEVELOPMENT</p>
                            <p className="right">TYPOGRAPHY</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="main-feature">
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
                                        </div>
                                        <h4>Google Just Showed Us the Future Of Gaming</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>Read More</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row sub-feature">
                                <div className="col-lg-4">
                                    <img src={"./assets/images/loading.gif"} alt="Sub Featued Image" width="300px" />
                                </div>
                                <div className="col-lg-8">
                                    <h3>How a Limitless Internet Binds Us</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur 
                                        adipiscing elit. Etiam at ultricies dui, eu mattis 
                                        nisl. Etiam placerat orci eu tortor euismod, quis 
                                        vehicula velit dictum. 
                                    </p>
                                    <h5>Eric Ravensoft in One Zero</h5>
                                    <p>MAR 20 . 5 MIN READ</p>
                                </div>
                            </div>
                            <div className="row sub-feature">
                                <div className="col-lg-4">
                                    <img src={"./assets/images/loading.gif"} alt="Sub Featued Image" width="300px" />
                                </div>
                                <div className="col-lg-8">
                                    <h3>How a Limitless Internet Binds Us</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur 
                                        adipiscing elit. Etiam at ultricies dui, eu mattis 
                                        nisl. Etiam placerat orci eu tortor euismod, quis 
                                        vehicula velit dictum. 
                                    </p>
                                    <h5>Eric Ravensoft in One Zero</h5>
                                    <p>MAR 20 . 5 MIN READ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '20px' }}>
                        <div className="col-lg-4">
                            <div className="main-feature">
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
                                        </div>
                                        <h4>Google Just Showed Us the Future Of Gaming</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>Read More</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="main-feature">
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
                                        </div>
                                        <h4>Google Just Showed Us the Future Of Gaming</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>Read More</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="main-feature">
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
                                        </div>
                                        <h4>Google Just Showed Us the Future Of Gaming</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>Read More</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-content-latest-posts-and-popular-posts">
                    <div className="row">
                        <div className="latest-posts col-lg-8">
                            <div className="latest-posts-title"><h3>Latest Posts</h3></div>
                            <div className="row">
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
                                        </div>
                                        <h4>Google Just Showed Us the Future Of Gaming</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>Read More</p>
                                    </div>
                                </div>
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
                                        </div>
                                        <h4>Google Just Showed Us the Future Of Gaming</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>Read More</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
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
                                        </div>
                                        <h4>Google Just Showed Us the Future Of Gaming</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>Read More</p>
                                    </div>
                                </div>
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
                                        </div>
                                        <h4>Google Just Showed Us the Future Of Gaming</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Etiam at ultricies dui…
                                        </p>
                                        <p>Read More</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button>Load More</button>
                            </div>
                        </div>
                        <div className="popular-posts col-lg-4">
                            <div className="popular-posts-title"><h3>Popular Posts</h3></div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span className="popular-post-number">01</span>
                                </div>
                                <div className="col-lg-8">
                                    <h3>Organize the Content Moderators</h3>
                                    <p>Eric Ravensoft in UI / UX Design</p>
                                    <p>MAR 20 . 5 MIN READ</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span className="popular-post-number">02</span>
                                </div>
                                <div className="col-lg-8">
                                    <h3>Organize the Content Moderators</h3>
                                    <p>Eric Ravensoft in UI / UX Design</p>
                                    <p>MAR 20 . 5 MIN READ</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span className="popular-post-number">03</span>
                                </div>
                                <div className="col-lg-8">
                                    <h3>Organize the Content Moderators</h3>
                                    <p>Eric Ravensoft in UI / UX Design</p>
                                    <p>MAR 20 . 5 MIN READ</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span className="popular-post-number">04</span>
                                </div>
                                <div className="col-lg-8">
                                    <h3>Organize the Content Moderators</h3>
                                    <p>Eric Ravensoft in UI / UX Design</p>
                                    <p>MAR 20 . 5 MIN READ</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span className="popular-post-number">05</span>
                                </div>
                                <div className="col-lg-8">
                                    <h3>Organize the Content Moderators</h3>
                                    <p>Eric Ravensoft in UI / UX Design</p>
                                    <p>MAR 20 . 5 MIN READ</p>
                                </div>
                            </div>
                            <div>
                                <button>Load More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-content-detailed">
                    <div className="blog-content-detailed-title">
                        <h3>Web Development</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
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
                                    </div>
                                    <h4>Google Just Showed Us the Future Of Gaming</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur 
                                        adipiscing elit. Etiam at ultricies dui…
                                    </p>
                                    <p>Read More</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
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
                                    </div>
                                    <h4>Google Just Showed Us the Future Of Gaming</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur 
                                        adipiscing elit. Etiam at ultricies dui…
                                    </p>
                                    <p>Read More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
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
                                    </div>
                                    <h4>Google Just Showed Us the Future Of Gaming</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur 
                                        adipiscing elit. Etiam at ultricies dui…
                                    </p>
                                    <p>Read More</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
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
                                    </div>
                                    <h4>Google Just Showed Us the Future Of Gaming</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur 
                                        adipiscing elit. Etiam at ultricies dui…
                                    </p>
                                    <p>Read More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
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
                                    </div>
                                    <h4>Google Just Showed Us the Future Of Gaming</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur 
                                        adipiscing elit. Etiam at ultricies dui…
                                    </p>
                                    <p>Read More</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
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
                                    </div>
                                    <h4>Google Just Showed Us the Future Of Gaming</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur 
                                        adipiscing elit. Etiam at ultricies dui…
                                    </p>
                                    <p>Read More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button>Load More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;