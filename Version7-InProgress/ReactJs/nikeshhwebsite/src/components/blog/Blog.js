import React from "react";
import "./blog.css";

const Blog = () => {
    return (
        <div className="blog">
            <div className="row">
                <div className="blog-header col-md-12">
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
        </div>
    );
}

export default Blog;