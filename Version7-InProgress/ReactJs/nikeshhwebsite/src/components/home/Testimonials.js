import React from "react";
import "./testimonials.css";

const Testimonials = () => {
    return (
        <div className="testimonails">
            <span className="title">Testimonials</span>
            <h3 className="subtitle">See What Others Said About Me</h3>
            <div className="testimonial-carousel owl-carousel owl-theme">
                <div className="testimonial-block">
                    <h1>First Block</h1>
                </div>
                <div className="testimonial-block">
                    <h1>Second Block</h1>
                </div>
                <div className="testimonial-block">
                    <h1>Third Block</h1>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;