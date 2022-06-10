import React from "react";
import './skillsingle.css';
import line from "../../images/line.png";

const SkillSingle = () => {
    return (
        <div className="skillsingle">
            <div className="skill_header row">
                <div className="col-md-4">
                    <img src={"./assets/images/skillsingle.png"} alt="Skill Single" />
                </div>
                <div className="col-md-8">
                    <h3>Lorem Ipsum</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam at ultricies dui, eu mattis nisl. Etiam placerat orci 
                        eu tortor euismod, quis vehicula velit dictum. 
                        Morbi vehicula, tortor et cursus sollicitudin, massa lectus 
                        ornare lectus, ut gravida eros velit a libero.
                    </p>
                    <div className="ratings_with_line">
                        <div className="ratings">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <img src={line} alt="Line" className="ratings_line" />
                    </div>
                </div>
            </div>
            <div className="projects_and_works">
                <span className="title">Projects / Works</span>
                <h3 className="subtitle">What Have I Done?</h3>
                <div style={{ textAlign: "center" }}>
                    <p>THE BELOW PROJECTS IS ONLY BASED ON THE ABOVE SKILL.</p>
                    <button className="btn btn-warning"><span>CLICK HERE TO SEE OTHER PROJECTS</span></button>
                </div>
                <div className="container">
                    <div className="row" style={{ marginTop: "90px" }}>
                        <div className="col">
                            <div className="card project" style={{width: "18rem", borderRadius: "10px"}}>
                                <i class="favorite fa-brands fa-gratipay fa-xl"></i>
                                <img src={"./assets/images/loading.gif"} className="card-img-top" alt="Project" style={{ padding: "50px" }} />
                                <div className="card-body">
                                    <h4>Project Title</h4>
                                    <p className="card-text">Engrossed listening. Park gate sell they west hard for the.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card project" style={{width: "18rem", borderRadius: "10px"}}>
                                <i class="favorite fa-brands fa-gratipay fa-xl"></i>
                                <img src={"./assets/images/loading.gif"} className="card-img-top" alt="Project" style={{ padding: "50px" }} />
                                <div className="card-body">
                                    <h4>Project Title</h4>
                                    <p className="card-text">Engrossed listening. Park gate sell they west hard for the.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card project" style={{width: "18rem", borderRadius: "10px"}}>
                                <i class="favorite fa-brands fa-gratipay fa-xl"></i>
                                <img src={"./assets/images/loading.gif"} className="card-img-top" alt="Project" style={{ padding: "50px" }} />
                                <div className="card-body">
                                    <h4>Project Title</h4>
                                    <p className="card-text">Engrossed listening. Park gate sell they west hard for the.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "90px" }}>
                        <div className="col">
                            <div className="card project" style={{width: "18rem", borderRadius: "10px"}}>
                                <i class="favorite fa-brands fa-gratipay fa-xl"></i>
                                <img src={"./assets/images/loading.gif"} className="card-img-top" alt="Project" style={{ padding: "50px" }} />
                                <div className="card-body">
                                    <h4>Project Title</h4>
                                    <p className="card-text">Engrossed listening. Park gate sell they west hard for the.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card project" style={{width: "18rem", borderRadius: "10px"}}>
                                <i class="favorite fa-brands fa-gratipay fa-xl"></i>
                                <img src={"./assets/images/loading.gif"} className="card-img-top" alt="Project" style={{ padding: "50px" }} />
                                <div className="card-body">
                                    <h4>Project Title</h4>
                                    <p className="card-text">Engrossed listening. Park gate sell they west hard for the.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card project" style={{width: "18rem", borderRadius: "10px"}}>
                                <i class="favorite fa-brands fa-gratipay fa-xl"></i>
                                <img src={"./assets/images/loading.gif"} className="card-img-top" alt="Project" style={{ padding: "50px" }} />
                                <div className="card-body">
                                    <h4>Project Title</h4>
                                    <p className="card-text">Engrossed listening. Park gate sell they west hard for the.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog">
                <h1>Blog content will come here</h1>
            </div>
        </div>
    );
}

export default SkillSingle;