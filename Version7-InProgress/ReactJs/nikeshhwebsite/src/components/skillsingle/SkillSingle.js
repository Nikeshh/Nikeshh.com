import React from "react";
import './skillsingle.css';
import "../home/projectsandworks.css";
import Projects from "../home/projectsandworks/Projects";

const SkillSingle = () => {
    return (
        <div className="skillsingle container" style={{ marginTop: '40px' }}>
            <div className="row">
                <div className="col-lg-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <img src={"./assets/images/skillsingle.png"} alt="Skill Single" />
                </div>
                <div className="col-lg-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h1 style={{ fontFamily: "'Dancing Script', cursive", fontWeight: '700' }}>Lorem Ipsum</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam at ultricies dui, eu mattis nisl. Etiam placerat orci 
                        eu tortor euismod, quis vehicula velit dictum. 
                        Morbi vehicula, tortor et cursus sollicitudin, massa lectus 
                        ornare lectus, ut gravida eros velit a libero.
                    </p>
                    <div className="ratings">
                        <i class="fa-solid fa-star fa-2xl"></i>
                        <i class="fa-solid fa-star fa-2xl"></i>
                        <i class="fa-solid fa-star fa-2xl"></i>
                        <i class="fa-solid fa-star fa-2xl"></i>
                        <i class="fa-solid fa-star-half-stroke fa-2xl"></i>
                    </div>
                </div>
            </div>
            <div className="projectsandworks">
                <span className="title">Projects / Works</span>
                <h3 className="subtitle">What Have I Done?</h3>
                <div className="container">
                    <Projects name="Web Development" />
                    <Projects name="App Development" />
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '100px' }}>
                <p>THE ABOUT PROJECTS IS ONLY BASED ON WEB DEVELOPMENT.</p>
                <button className="btn btn-warning"><span>CLICK HERE TO SEE OTHER PROJECTS</span></button>
            </div>
            <div style={{ textAlign: 'center', marginTop: '100px' }}>
                <h1 style={{ fontFamily: "'Dancing Script', cursive", fontWeight: '700' }}>Read more about web development here</h1>
            </div>
        </div>
    );
}

export default SkillSingle;