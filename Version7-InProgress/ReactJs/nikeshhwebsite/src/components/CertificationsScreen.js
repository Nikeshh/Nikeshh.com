import React from "react";
import Header from "./util/Header";
import Footer from "./util/Footer";
import Certifications from "./certifications/Certifications";

const CertificationsScreen = () => {
    return (
        <>
            <div className="header__image"  style={{ marginBottom: "300px" }}>
                <Header page_name="certifications" />
                <Certifications />
            </div>
            <Footer />
        </>
    );
}

export default CertificationsScreen;