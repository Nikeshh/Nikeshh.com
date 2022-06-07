import React from "react";
import "./blog.css";

const Blog = () => {
    return (
        <div className="blog">
            <div className="blog-header">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-lg-7">
                            <h1>Welcome To Nikeshh Blog,<br></br>A Tech And Lifestyle Blog</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Etiam at ultricies dui, eu mattis nisl. Etiam placerat orci 
                                eu tortor euismod, quis vehicula velit dictum.
                            </p>
                            <button>Learn More</button>
                            <button>Create a account</button>
                        </div>
                        <div className="col-lg-5">
                            <img src={"./assets/images/landing_image.png"} alt="Landing Image" width="500px" />
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
                </div>
            </div>
        </div>
    );
}

export default Blog;