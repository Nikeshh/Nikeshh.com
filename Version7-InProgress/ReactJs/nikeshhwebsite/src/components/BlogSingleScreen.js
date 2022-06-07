import React from "react";
import Header from "./util/Header";
import Footer from "./util/Footer";
import BlogSingle from "./blogsingle/BlogSingle";

const BlogSingleScreen = () => {
    return (
        <>
            <div className="header__image"  style={{ marginBottom: "300px" }}>
                <Header page_name="blogsingle" />
                <BlogSingle />
            </div>
            <Footer />
        </>
    );
}

export default BlogSingleScreen;