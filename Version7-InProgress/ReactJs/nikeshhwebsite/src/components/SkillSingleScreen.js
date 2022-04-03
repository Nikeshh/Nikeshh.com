import React from "react";
import Projects from "./home/Projects";
import ReadMyWritings from "./home/ReadMyWritings";
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
                <section>
                    <div>
                        <p>PROJECTS / WORKS</p>
                        <h3>What have I done?</h3>
                    </div>
                    <div className="row">
                        <p>THE BELOW PROJECTS IS ONLY BASED ON THE ABOVE SKILL. TO SEE OTHER PROJECTS</p>
                        <button>CLICK HERE</button>
                    </div>
                    <div className="row justify-content-between">
                        <Projects threeColumn={true} />
                    </div>
                    <div className="row justify-content-between">
                        <Projects threeColumn={true} />
                    </div>
                </section>
                <section>
                    <div>
                        <p>BLOG</p>
                        <h3>READ SOME OF MY WRITINGS</h3>
                    </div>
                    <div className="row">
                        <p>THE BELOW PROJECTS IS ONLY BASED ON THE ABOVE SKILL. TO SEE OTHER PROJECTS</p>
                        <button>CLICK HERE</button>
                    </div>
                    <div className="row justify-content-between">
                        <ReadMyWritings />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default SkillSingleScreen;