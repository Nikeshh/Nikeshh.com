import React from "react";
import Header from "./util/Header";
import Footer from "./util/Footer";
import Test from "./test/Test";

const TestScreen = () => {
    return (
        <>
            <div className="header__image">
                <Header page_name="home" />
                <Test />
            </div>
            <Footer />
        </>
    );
}

export default TestScreen;