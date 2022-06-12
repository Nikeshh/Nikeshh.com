import React from "react";
import Header from "./util/Header";
import Footer from "./util/Footer";
import Newsletter from "./newsletter/Newsletter";

const NewsletterScreen = () => {
    return (
        <>
            <Header page_name="newsletter" />
            <Newsletter />
            <Footer />
        </>
    );
}

export default NewsletterScreen;