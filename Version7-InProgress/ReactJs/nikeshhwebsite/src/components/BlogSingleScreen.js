import React from "react";
import Header from "./util/Header";
import Footer from "./util/Footer";
import BlogSingle from "./blogsingle/BlogSingle";

const BlogSingleScreen = () => {
    return (
        <>
            <Header page_name="blogsingle" />
            <BlogSingle />
            <Footer />
        </>
    );
}

export default BlogSingleScreen;