import React from "react";
import Header from "./util/Header";
import Footer from "./util/Footer";
import KnowledgeBase from "./knowledgebase/KnowledgeBase";

const KnowledgeBaseScreen = () => {
    return (
        <>
            <div className="header__image"  style={{ marginBottom: "300px" }}>
                <Header page_name="knowledgebase" />
                <KnowledgeBase />
            </div>
            <Footer />
        </>
    );
}

export default KnowledgeBaseScreen;