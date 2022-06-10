import React from "react";
import Header from "./util/Header";
import Footer from "./util/Footer";
import Test from "./test/Test";

const TestScreen = () => {
    return (
        <>
            <Header page_name="home" />
            <Test />
            <Footer />
        </>
    );
}

export default TestScreen;