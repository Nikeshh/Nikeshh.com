import React from "react";
import Header from "./util/Header";
import Footer from "./util/Footer";
import Forum from "./forum/Forum";

const ForumScreen = () => {
    return (
        <>
            <div className="header__image"  style={{ marginBottom: "300px" }}>
                <Header page_name="forum" />
                <Forum />
            </div>
            <Footer />
        </>
    );
}

export default ForumScreen;