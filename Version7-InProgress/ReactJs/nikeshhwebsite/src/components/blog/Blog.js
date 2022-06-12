import React from "react";
import "./blog.css";
import BlogCard from "./BlogCard";

const Blog = () => {
    return (
        <div className="blog">
            <div className="blog-header">
                <div className="row">
                    <div className="col-lg-7" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h1 style={{ fontFamily: "'Dancing Script', cursive", fontWeight: '700' }}>Welcome To Nikeshh Blog</h1>
                        <h1 style={{ fontWeight: '700' }}>A Tech And Lifestyle Blog</h1>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Etiam at ultricies dui, eu mattis nisl. Etiam placerat orci 
                            eu tortor euismod, quis vehicula velit dictum.
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
            <div className="blog-content" style={{ marginTop: '100px' }}>
                <div className="blog-content-header">
                    <ul>
                        <li>Home</li>
                        <li>UI/UX Design</li>
                        <li>Web Development</li>
                        <li>Typography</li>
                        <li>Freelance Business</li>
                        <li>...</li>
                    </ul>
                    <div style={{ marginRight: '10px' }}>
                        <button className="btn btn-warning" style={{ marginRight: '10px' }}>Login</button>
                        <button className="btn btn-warning" style={{ marginRight: '10px' }}>Register</button>
                        <button className="btn btn-warning"><input type="text" placeholder="Search..." style={{ padding: '5px', borderRadius: '5px', borderStyle: 'dashed' }} /><i className="fa fa-search" style={{ marginLeft: '10px' }}></i></button>
                    </div>
                </div>
                <div className="blog-content-featured" style={{ marginTop: '50px' }}>
                    <div className="blog-content-featured-header">
                        <h3 className="left" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '700' }}>Featured For Members</h3>
                        <div style={{ display: 'flex' }}>
                            <p style={{ marginRight: '10px', fontWeight: '700' }}>UI/UX DESIGN</p>
                            <p style={{ marginRight: '10px', fontWeight: '700' }}>WEB DEVELOPMENT</p>
                            <p style={{ marginRight: '10px', fontWeight: '700' }}>TYPOGRAPHY</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="main-feature">
                                <BlogCard />
                            </div>
                        </div>
                        <div className="col-lg-8" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
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
                                    <p>MAR 20 &middot; 5 MIN READ</p>
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
                                    <p>MAR 20 &middot; 5 MIN READ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '50px' }}>
                        <div className="col-lg-4">
                            <div className="main-feature">
                                <BlogCard />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="main-feature">
                                <BlogCard />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="main-feature">
                                <BlogCard />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-content-latest-posts-and-popular-posts" style={{ marginTop: '50px' }}>
                    <div className="row">
                        <div className="latest-posts col-lg-8">
                            <div className="latest-posts-title"><h3>Latest Posts</h3></div>
                            <div className="row" style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <BlogCard />
                                <BlogCard />
                            </div>
                            <div className="row" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
                                <BlogCard />
                                <BlogCard />
                            </div>
                            <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', }}>
                                <button className="btn btn-warning">Load More</button>
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
                                    <p>MAR 20 &middot; 5 MIN READ</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span className="popular-post-number">02</span>
                                </div>
                                <div className="col-lg-8">
                                    <h3>Organize the Content Moderators</h3>
                                    <p>Eric Ravensoft in UI / UX Design</p>
                                    <p>MAR 20 &middot; 5 MIN READ</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span className="popular-post-number">03</span>
                                </div>
                                <div className="col-lg-8">
                                    <h3>Organize the Content Moderators</h3>
                                    <p>Eric Ravensoft in UI / UX Design</p>
                                    <p>MAR 20 &middot; 5 MIN READ</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span className="popular-post-number">04</span>
                                </div>
                                <div className="col-lg-8">
                                    <h3>Organize the Content Moderators</h3>
                                    <p>Eric Ravensoft in UI / UX Design</p>
                                    <p>MAR 20 &middot; 5 MIN READ</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span className="popular-post-number">05</span>
                                </div>
                                <div className="col-lg-8">
                                    <h3>Organize the Content Moderators</h3>
                                    <p>Eric Ravensoft in UI / UX Design</p>
                                    <p>MAR 20 &middot; 5 MIN READ</p>
                                </div>
                            </div>
                            <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', }}>
                                <button className="btn btn-warning">Load More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-content-detailed" style={{ marginTop: '100px' }}>
                    <div className="blog-content-detailed-title">
                        <h3>Web Development</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="row" style={{ marginTop: '50px' }}>
                            <div className="col-lg-6">
                                <BlogCard />
                            </div>
                            <div className="col-lg-6">
                                <BlogCard />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '50px' }}>
                            <div className="col-lg-6">
                                <BlogCard />
                            </div>
                            <div className="col-lg-6">
                                <BlogCard />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '50px' }}>
                            <div className="col-lg-6">
                                <BlogCard />
                            </div>
                            <div className="col-lg-6">
                                <BlogCard />
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', }}>
                        <button className="btn btn-warning">Load More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;