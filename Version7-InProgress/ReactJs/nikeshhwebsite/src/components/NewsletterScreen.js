import React from "react";
import Header from "./util/Header";
import Footer from "./util/Footer";
import Newsletter from "./newsletter/Newsletter";

const NewsletterScreen = () => {
    return (
        <>
            <div className="header__image"  style={{ marginBottom: "300px" }}>
                <Header page_name="newsletter" />
                <Newsletter />
            </div>
            <Footer />
        </>
    );
}

export default NewsletterScreen;