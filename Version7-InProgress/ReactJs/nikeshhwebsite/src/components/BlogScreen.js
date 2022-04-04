import React from "react";
import Footer from "./util/Footer";
import Header from "./util/Header";

const BlogScreen = () => {
    return (
        <>
            <Header />
            <div className="d-flex justify-content-between">
                <ul className="d-flex">
                    <li>HOME</li>
                    <li>UI/UX DESIGN</li>
                    <li>WEB DEVELOPMENT</li>
                    <li>TYPOGRAPHY</li>
                    <li>FREELANCE BUSINESS</li>
                    <li>MORE</li>
                </ul>
                <div>
                    <input type="text" value="Search..."></input>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BlogScreen;