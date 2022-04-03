import React from "react";
import Footer from "./util/Footer";
import Header from "./util/Header";

const SkillSingleScreen = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={"/logo192.png"} alt="logo" />
                        </div>
                        <div className="col-lg-8">
                            <h1>Lorem Ipsum</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Etiam at ultricies dui, eu mattis nisl. Etiam placerat orci 
                                eu tortor euismod, quis vehicula velit dictum. 
                                Morbi vehicula, tortor et cursus sollicitudin, massa lectus 
                                ornare lectus, ut gravida eros velit a libero.
                            </p>
                            <h3>
                                My skill expertise : 
                                <span>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                            </h3>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default SkillSingleScreen;