import React from "react";
import Header from "./util/Header";
import Footer from "./util/Footer";
import Certifications from "./certifications/Certifications";

const CertificationsScreen = () => {
    return (
        <>
            <Header page_name="certifications" />
            <Certifications />
            <Footer />
        </>
    );
}

export default CertificationsScreen;