import React from "react";
import "./blog.css";

const Blog = () => {
    return (
        <div className="blog_home">
            <span className="title">Blog</span>
            <h3 className="subtitle">Read Some Of My Writings</h3>
            <div className="row" style={{ marginTop: '100px' }}>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
                <button className="btn btn-warning">View More</button>
            </div>
        </div>
    );
}

export default Blog;