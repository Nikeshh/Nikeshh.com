import React from "react";
import Header from "./util/Header";
import Footer from "./util/Footer";
import About from "./about/About";

const AboutScreen = () => {
    return (
        <>
            <div className="header__image"  style={{ marginBottom: "300px" }}>
                <Header page_name="about" />
                <About />
            </div>
            <Footer />
        </>
    );
}

export default AboutScreen;