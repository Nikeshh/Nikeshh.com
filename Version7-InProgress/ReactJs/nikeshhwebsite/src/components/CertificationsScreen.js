import React from "react";
import Footer from "./util/Footer";
import Header from "./util/Header";

const CertificationsScreen = () => {
    return (
        <>
            <Header />
            <main>
                <div className="row justify-content-center">
                    <h1>CERTIFICATIONS</h1>
                    <div className="row">
                        <button>WEB DEVELOPMENT</button>
                        <button>APP DEVELOPMENT</button>
                        <button>AI &amp; ML</button>
                    </div>
                </div>
                <section>
                    <div className="row">
                        <div className="col-lg-4">
                            <h1>1</h1>
                            <img src={"/logo192.png"} alt="logo" />
                        </div>
                        <div className="col-lg-8">
                            <h1>Certificate Title</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Etiam at ultricies dui, eu mattis nisl. Etiam placerat orci 
                                eu tortor euismod, quis vehicula velit dictum. 
                                Morbi vehicula, tortor et cursus sollicitudin, massa lectus 
                                ornare lectus, ut gravida eros velit a libero. In a eros felis. 
                                Sed a ex a ante ultricies fermentum ac eget nibh. 
                                Maecenas nec odio volutpat, scelerisque leo non, 
                                efficitur mauris.
                            </p>
                            <p>Certificate link</p>
                            <p>Certificate credential id</p>
                            <div className="row">
                                <button>MORE</button>
                                <button>PROJECTS</button>
                                <button>TUTORIALS</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <h1>2</h1>
                            <img src={"/logo192.png"} alt="logo" />
                        </div>
                        <div className="col-lg-8">
                            <h1>Certificate Title</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Etiam at ultricies dui, eu mattis nisl. Etiam placerat orci 
                                eu tortor euismod, quis vehicula velit dictum. 
                                Morbi vehicula, tortor et cursus sollicitudin, massa lectus 
                                ornare lectus, ut gravida eros velit a libero. In a eros felis. 
                                Sed a ex a ante ultricies fermentum ac eget nibh. 
                                Maecenas nec odio volutpat, scelerisque leo non, 
                                efficitur mauris.
                            </p>
                            <p>Certificate link</p>
                            <p>Certificate credential id</p>
                            <div className="row">
                                <button>MORE</button>
                                <button>PROJECTS</button>
                                <button>TUTORIALS</button>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="row justify-content-center">
                    <h1>AWARDS</h1>
                    <div className="row">
                        <button>WEB DEVELOPMENT</button>
                        <button>APP DEVELOPMENT</button>
                        <button>AI &amp; ML</button>
                    </div>
                </div>
                <section>
                    <div className="row">
                        <div className="col-lg-4">
                            <h1>1</h1>
                            <img src={"/logo192.png"} alt="logo" />
                        </div>
                        <div className="col-lg-8">
                            <h1>Award Title</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Etiam at ultricies dui, eu mattis nisl. Etiam placerat orci 
                                eu tortor euismod, quis vehicula velit dictum. 
                                Morbi vehicula, tortor et cursus sollicitudin, massa lectus 
                                ornare lectus, ut gravida eros velit a libero. In a eros felis. 
                                Sed a ex a ante ultricies fermentum ac eget nibh. 
                                Maecenas nec odio volutpat, scelerisque leo non, 
                                efficitur mauris.
                            </p>
                            <p>Award link</p>
                            <p>Award credential id</p>
                            <div className="row">
                                <button>MORE</button>
                                <button>PROJECTS</button>
                                <button>TUTORIALS</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <h1>2</h1>
                            <img src={"/logo192.png"} alt="logo" />
                        </div>
                        <div className="col-lg-8">
                            <h1>Certificate Title</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Etiam at ultricies dui, eu mattis nisl. Etiam placerat orci 
                                eu tortor euismod, quis vehicula velit dictum. 
                                Morbi vehicula, tortor et cursus sollicitudin, massa lectus 
                                ornare lectus, ut gravida eros velit a libero. In a eros felis. 
                                Sed a ex a ante ultricies fermentum ac eget nibh. 
                                Maecenas nec odio volutpat, scelerisque leo non, 
                                efficitur mauris.
                            </p>
                            <p>Award link</p>
                            <p>Award credential id</p>
                            <div className="row">
                                <button>MORE</button>
                                <button>PROJECTS</button>
                                <button>TUTORIALS</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default CertificationsScreen;