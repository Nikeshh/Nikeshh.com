import React from "react";
import Header from "./util/Header";
import Footer from "./util/Footer";
import Patreon from "./patreon/Patreon";

const PatreonScreen = () => {
    return (
        <>
            <Header page_name="patreon" />
            <Patreon />
            <Footer />
        </>
    );
}

export default PatreonScreen;