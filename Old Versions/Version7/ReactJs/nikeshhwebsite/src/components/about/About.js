import React from "react";
import "./about.css";

const About = () => {
    return (
        <div className="about container">
            <div style={{ marginBottom: '100px'}}>
                <span className="title">Deep Dive Into My Life</span>
                <h3 className="subtitle">My Story</h3>
            </div>
            <div className="row first-about-row" style={{ marginBottom: '100px' }}>
                <div className="col-lg-6">
                    <img src={"./assets/images/loading.gif"} alt="Landing Image" style={{ width: '100%' }} className="image" />
                </div>
                <div className="col-lg-6 content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <p style={{ textAlign: 'justify' }}>
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
            <div className="row second-about-row">
                <div className="col-lg-6 content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <p style={{ textAlign: 'justify' }}>
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
                <div className="col-lg-6">
                    <img src={"./assets/images/loading.gif"} alt="Landing Image" style={{ width: '100%' }} className="image" />
                </div>
            </div>
        </div>
    );
}

export default About;