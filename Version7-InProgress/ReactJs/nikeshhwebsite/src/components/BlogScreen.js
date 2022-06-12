import React from "react";
import Header from "./util/Header";
import Footer from "./util/Footer";
import Blog from "./blog/Blog";

const BlogScreen = () => {
    return (
        <>
            <Header page_name="blog" />
            <Blog />
            <Footer />
        </>
    );
}

export default BlogScreen;