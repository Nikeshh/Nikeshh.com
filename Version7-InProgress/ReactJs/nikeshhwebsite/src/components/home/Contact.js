import React from "react";
import './contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <span className="title">Say Hello / Hire Me</span>
            <h3 className="subtitle">Get In Touch! I Love To Meet People!</h3>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
                <p style={{ textAlign: 'center', fontStyle: 'italic', fontFamily: "'Montserrat', sans-serif", marginTop: '20px' }}>
                    I love to <b>meet and collaborate</b> with people from various domains and expertise.<br />
                    I am always available for a <b>coffee</b><img src={"/assets/images/coffee.gif"} width="40px" alt="Phone icon" /> if you are in Toronto, Canada.<br />
                    I am also available for <b>freelancing and contracting.</b>
                </p>
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-md-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={"./assets/images/loading.gif"} alt="Landing Image" width="400px" />
                    </div>
                    <div className="col-md-8">
                        <div className="card" style={{ width: "50rem", height: "25rem", borderTopLeftRadius: "80px", backgroundColor: '#DFD7F9' }}>
                            <div className="card-body">
                                <div className="row" style={{ marginTop: '40px', marginLeft: '30px', marginRight: '30px' }}>
                                    <div className="col-md-6" style={{ position: 'relative' }}>
                                        <input id="firstName" type="text" class="form-control" placeholder="Your first name" style={{ paddingLeft: '50px' }} />
                                        <i class="fa-solid fa-message" style={{ position: 'absolute', top: '30%', left: '10%' }}></i>
                                    </div>
                                    <div className="col-md-6" style={{ position: 'relative' }}>
                                        <input id="lastName" type="text" class="form-control" placeholder="Your last name" style={{ paddingLeft: '50px' }} />
                                        <i class="fa-solid fa-message" style={{ position: 'absolute', top: '30%', left: '10%' }}></i>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: '20px', marginLeft: '30px', marginRight: '30px' }}>
                                    <div className="col-md-6" style={{ position: 'relative' }}>
                                        <input id="emailid" type="email" class="form-control" placeholder="Your email id" style={{ paddingLeft: '50px' }} />
                                        <i class="fa-solid fa-message" style={{ position: 'absolute', top: '30%', left: '10%' }}></i>
                                    </div>
                                    <div className="col-md-6" style={{ position: 'relative' }}>
                                        <input id="phonenumber" type="tel" class="form-control" placeholder="Your phone number" style={{ paddingLeft: '50px' }} />
                                        <i class="fa-solid fa-message" style={{ position: 'absolute', top: '30%', left: '10%' }}></i>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: '20px', marginLeft: '30px', marginRight: '30px' }}>
                                    <div className="col-md-12" style={{ position: 'relative' }}>
                                        <input id="reasonofcontact" type="text" class="form-control" placeholder="Your reason of contact" style={{ paddingLeft: '50px' }} />
                                        <i class="fa-solid fa-message" style={{ position: 'absolute', top: '30%', left: '5%' }}></i>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: '20px', marginLeft: '30px', marginRight: '30px' }}>
                                    <div className="col-md-12" style={{ position: 'relative' }}>
                                        <input id="message" type="text" class="form-control" placeholder="Your message" style={{ paddingLeft: '50px' }} />
                                        <i class="fa-solid fa-message" style={{ position: 'absolute', top: '30%', left: '5%' }}></i>
                                    </div>
                                </div>
                                <div className="submit" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                                    <button className="btn btn-warning" style={{ borderRadius: '10px', display: 'flex', alignItems: 'center' }}><span>Submit</span><img src="https://img.icons8.com/ios/50/undefined/mailbox-closed-flag-down--v1.png"/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;