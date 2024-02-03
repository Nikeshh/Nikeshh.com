import React from "react";
import Header from "./util/Header";
import Footer from "./util/Footer";
import LearnHub from "./learnhub/LearnHub";

const LearnHubScreen = () => {
    return (
        <>
            <Header page_name="learnhub" />
            <LearnHub />
            <Footer />
        </>
    );
}

export default LearnHubScreen;