import React from "react";
import Header from "./util/Header";
import Footer from "./util/Footer";
import About from "./about/About";

const AboutScreen = () => {
    return (
        <>
            <Header page_name="about" />
            <About />
            <Footer />
        </>
    );
}

export default AboutScreen;