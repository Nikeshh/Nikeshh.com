import React from "react";
import Footer from "./util/Footer";
import Header from "./util/Header";

const AboutScreen = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    <div>
                        <p>DEEP DIVE INTO MY LIFE</p>
                        <h3>My Story</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={"/logo192.png"} alt="my_story" />
                        </div>
                        <div className="col-lg-8">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Etiam at ultricies dui, eu mattis nisl. Etiam placerat orci 
                                eu tortor euismod, quis vehicula velit dictum. 
                                Morbi vehicula, tortor et cursus sollicitudin, massa lectus 
                                ornare lectus, ut gravida eros velit a libero. In a eros felis. 
                                Sed a ex a ante ultricies fermentum ac eget nibh. 
                                Maecenas nec odio volutpat, scelerisque leo non, 
                                efficitur mauris. Proin placerat laoreet nunc a vulputate. 
                                Aenean ac mauris lobortis, condimentum tortor sed, 
                                ultrices est. Integer luctus dictum enim sit amet cursus. 
                                Nunc dictum finibus odio sit amet luctus. Maecenas 
                                tristique nisl magna, sit amet vulputate lectus bibendum in. 
                                Phasellus quis tempor leo, in ultrices tortor. 
                                In vitae ante molestie, vestibulum orci ac, fringilla velit. 
                                Class aptent taciti sociosqu ad litora torquent per 
                                conubia nostra, per inceptos himenaeos.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Etiam at ultricies dui, eu mattis nisl. Etiam placerat orci 
                                eu tortor euismod, quis vehicula velit dictum. 
                                Morbi vehicula, tortor et cursus sollicitudin, massa lectus 
                                ornare lectus, ut gravida eros velit a libero. In a eros felis. 
                                Sed a ex a ante ultricies fermentum ac eget nibh. 
                                Maecenas nec odio volutpat, scelerisque leo non, 
                                efficitur mauris. Proin placerat laoreet nunc a vulputate. 
                                Aenean ac mauris lobortis, condimentum tortor sed, 
                                ultrices est. Integer luctus dictum enim sit amet cursus. 
                                Nunc dictum finibus odio sit amet luctus. Maecenas 
                                tristique nisl magna, sit amet vulputate lectus bibendum in. 
                                Phasellus quis tempor leo, in ultrices tortor. 
                                In vitae ante molestie, vestibulum orci ac, fringilla velit. 
                                Class aptent taciti sociosqu ad litora torquent per 
                                conubia nostra, per inceptos himenaeos.
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <img src={"/logo192.png"} alt="my_story" />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default AboutScreen;