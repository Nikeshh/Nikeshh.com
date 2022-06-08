import React from "react";
import ForumHeader from "./forum/ForumHeader";
import Footer from "./util/Footer";
import Forum from "./forum/Forum";

const ForumScreen = () => {
    return (
        <>
            <div className="header__image"  style={{ marginBottom: "300px" }}>
                <ForumHeader page_name="forum" />
                <Forum />
            </div>
            <Footer />
        </>
    );
}

export default ForumScreen;