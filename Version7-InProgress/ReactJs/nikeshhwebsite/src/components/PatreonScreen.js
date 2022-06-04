import React from "react";
import Header from "./util/Header";
import Footer from "./util/Footer";
import Patreon from "./patreon/Patreon";

const PatreonScreen = () => {
    return (
        <>
            <div className="header__image"  style={{ marginBottom: "300px" }}>
                <Header page_name="patreon" />
                <Patreon />
            </div>
            <Footer />
        </>
    );
}

export default PatreonScreen;