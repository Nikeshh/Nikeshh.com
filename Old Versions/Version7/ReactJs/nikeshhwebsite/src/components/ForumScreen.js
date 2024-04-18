import React from "react";
import Header from "./util/Header";
import Footer from "./util/Footer";
import Forum from "./forum/Forum";

const ForumScreen = () => {
    return (
        <>
            <Header page_name="forum" />
            <Forum />
            <Footer />
        </>
    );
}

export default ForumScreen;