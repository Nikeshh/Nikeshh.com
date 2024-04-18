import React from "react";
import "./testimonials.css";

const Testimonials = () => {
    return (
        <div className="testimonails">
            <span className="title">Testimonials</span>
            <h3 className="subtitle">See What Others Said About Me</h3>
            <div style={{ marginTop: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="testimonial-carousel owl-carousel owl-theme">
                    <div className="testimonial-block">
                        <div className="inner-box">
                            <div className="text">
                                Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right.  Not only that but this event gives you the chance to give your back-office team
                            </div>
                            <div className="info-box">
                                <div className="thumb">
                                    <img src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg" alt="" />
                                </div>
                                <h4 className="testimonial_author_name">Mahfuz Riad</h4>
                                <span className="designation">
                                    Ui Designer & CEO
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-block">
                        <div className="inner-box">
                            <div className="text">
                                Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right.  Not only that but this event gives you the chance to give your back-office team
                            </div>
                            <div className="info-box">
                                <div className="thumb">
                                    <img src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg" alt="" />
                                </div>
                                <h4 className="testimonial_author_name">Mahfuz Riad</h4>
                                <span className="designation">
                                    Ui Designer & CEO
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-block">
                        <div className="inner-box">
                            <div className="text">
                                Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right.  Not only that but this event gives you the chance to give your back-office team
                            </div>
                            <div className="info-box">
                                <div className="thumb">
                                    <img src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg" alt="" />
                                </div>
                                <h4 className="testimonial_author_name">Mahfuz Riad</h4>
                                <span className="designation">
                                    Ui Designer & CEO
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;