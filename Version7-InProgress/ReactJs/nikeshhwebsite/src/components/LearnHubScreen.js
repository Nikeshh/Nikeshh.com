import React from "react";
import Header from "./util/Header";
import Footer from "./util/Footer";
import LearnHub from "./learnhub/LearnHub";

const LearnHubScreen = () => {
    return (
        <>
            <div className="header__image"  style={{ marginBottom: "300px" }}>
                <Header page_name="learnhub" />
                <LearnHub />
            </div>
            <Footer />
        </>
    );
}

export default LearnHubScreen;