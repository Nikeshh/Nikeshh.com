import React from "react";

const Skills = () => {
    return (
        <>
            <div className="card" style={{width: "18rem", borderRadius: "10px"}}>
                <img src={"./assets/images/loading.gif"} className="card-img-top" alt="Skill" />
                <div className="card-body">
                    <div className="skills-title-and-ratings">
                        <h5 className="card-text">Web Services</h5>
                        <div className="ratings">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                    </div>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="card-body">
                    <a href="#" className="card-link">Contact Me <i class="fa-solid fa-address-book"></i></a>
                </div>
            </div>
        </>
    );
};

export default Skills;