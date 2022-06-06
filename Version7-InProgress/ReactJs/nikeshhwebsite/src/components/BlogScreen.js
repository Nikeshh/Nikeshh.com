import React from "react";
import Header from "./util/Header";
import Footer from "./util/Footer";
import Blog from "./blog/Blog";

const BlogScreen = () => {
    return (
        <>
            <div className="header__image"  style={{ marginBottom: "300px" }}>
                <Header page_name="blog" />
                <Blog />
            </div>
            <Footer />
        </>
    );
}

export default BlogScreen;