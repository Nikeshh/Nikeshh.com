import React from "react";
import Footer from "./util/Footer";
import Header from "./util/Header";

const PatreonScreen = () => {
    return (
        <>
            <Header />
            <section>
                <div className="row">
                    <p>SUPPORT</p>
                    <h1>LIKE MY WORK?</h1>
                    <p>IF YOU LIKE MY WORK, YOU CAN ALWAYS SUPPORT ME USING THE FOLLOWING LINKS</p>
                </div>
                <div className="row">
                    <button>Patreon</button>
                    <button>Buy me a coffee</button>
                </div>
            </section>
            <section>
                <p>SUPPORTERS WILL GET ACCESS TO THE PREMIUM CONTENT AND MUCH MORE</p>
                <div className="row">
                    <div className="col-lg-3">
                        <h3>Benefit Title</h3>
                        <img src={"/logo192.png"} alt="logo" />
                        <p>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Etiam 
                            at ultricies dui, eu mattis nisl. 
                            Etiam placerat orci eu tortor 
                            euismod, quis vehicula velit 
                            dictum.
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <h3>Benefit Title</h3>
                        <img src={"/logo192.png"} alt="logo" />
                        <p>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Etiam 
                            at ultricies dui, eu mattis nisl. 
                            Etiam placerat orci eu tortor 
                            euismod, quis vehicula velit 
                            dictum.
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <h3>Benefit Title</h3>
                        <img src={"/logo192.png"} alt="logo" />
                        <p>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Etiam 
                            at ultricies dui, eu mattis nisl. 
                            Etiam placerat orci eu tortor 
                            euismod, quis vehicula velit 
                            dictum.
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <h3>Benefit Title</h3>
                        <img src={"/logo192.png"} alt="logo" />
                        <p>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Etiam 
                            at ultricies dui, eu mattis nisl. 
                            Etiam placerat orci eu tortor 
                            euismod, quis vehicula velit 
                            dictum.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default PatreonScreen;