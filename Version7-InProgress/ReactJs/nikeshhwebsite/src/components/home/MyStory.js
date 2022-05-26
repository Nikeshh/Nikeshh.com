import React from "react";
import "./mystory.css";

const MyStory = () => {
    return (
        <div className="mystory">
            <span className="title">Deep Dive Into My Life</span>
            <h3 className="subtitle">My Story</h3>
            <div className="row">
                <div className="col-md-4">
                    <img src={"./assets/images/landing_image.png"} alt="My Story" width="500px" />
                </div>
                <div className="col-md-4">
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
                    <button className="btn btn-warning"><span>Want More Of My Life? Read More</span></button>
                </div>
            </div>
        </div>
    );
}

export default MyStory;