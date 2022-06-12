import React from "react";
import ForumHeader from "./forum/ForumHeader";
import Footer from "./util/Footer";
import Forum from "./forum/Forum";

const ForumScreen = () => {
    return (
        <>
            <ForumHeader page_name="forum" />
            <Forum />
            <Footer />
        </>
    );
}

export default ForumScreen;