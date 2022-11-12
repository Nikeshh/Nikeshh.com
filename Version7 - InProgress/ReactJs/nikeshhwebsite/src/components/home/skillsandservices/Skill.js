import React from "react";
import './skill.css';

const Skill = () => {
    return (
        <div className="skill">
            <div className="card" style={{ width: "18rem", borderRadius: "10px" }}>
                <div style={{ padding: '5px'}}>
                    <img src={"./assets/images/loading.gif"} className="card-img-top" alt="Skill" />
                </div>
                <div className="card-body">
                    <div className="skills-title-and-ratings" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h5 className="card-text" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: '700' }}>
                            Web Services
                        </h5>
                        <div className="ratings">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                    </div>
                    <p className="card-text" style={{ fontFamily: "'Montserrat', sans-serif", fontStyle: 'italic' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className="card-body" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <p className="skill_action"><i className="fa fa-eye"></i>View More</p>
                    <p className="skill_action"><i className="fa fa-paper-plane"></i>Contact Me</p>
                </div>
            </div>
        </div>
    );
};

export default Skill;