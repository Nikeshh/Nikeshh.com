import React from "react";
import './skillsingle.css';
import line from "../../images/line.png";

const SkillSingle = () => {
    return (
        <div className="skillsingle container">
            <div className="row">
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
        </div>
    );
}

export default SkillSingle;