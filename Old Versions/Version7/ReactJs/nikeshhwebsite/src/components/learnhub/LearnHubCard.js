import React from "react";

const LearnHubCard = () => {
    return (
        <>
            <div className="card" style={{ width: '30rem' }}>
                <img className="card-img-top" src={"./assets/images/loading.gif"} alt="Main Featued Image" />
                <div className="card-body">
                    <div className="metadata">
                        <div className="post-date" style={{ display: 'inline-block', marginRight: '10px' }}>
                            <p style={{ backgroundColor: 'rgb(236, 204, 236)', color: 'purple', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '30px', display: 'inline' }}>
                                <i className="fa fa-calendar" style={{ marginRight: '5px' }}></i>20 MAR 2022
                            </p>
                        </div>
                        <div className="author" style={{ display: 'inline-block', marginRight: '10px' }}>
                            <p style={{ backgroundColor: 'rgb(236, 204, 236)', color: 'purple', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '30px', display: 'inline' }}>
                                <i className="fa fa-user" style={{ marginRight: '5px' }}></i>Nikeshh
                            </p>
                        </div>
                        <div className="post-read-time" style={{ display: 'inline-block' }}>
                            <p style={{ backgroundColor: 'rgb(236, 204, 236)', color: 'purple', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '30px', display: 'inline' }}>
                                <i className="fa fa-eye" style={{ marginRight: '5px' }}></i>5 min read
                            </p>
                        </div>
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <div style={{ display: 'inline-block', marginRight: '5px' }}>
                            <p style={{ backgroundColor: 'rgb(236, 204, 236)', color: 'purple', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '30px', display: 'inline' }}>
                                All
                            </p>
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <p style={{ backgroundColor: 'rgb(236, 204, 236)', color: 'purple', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '30px', display: 'inline' }}>
                                Web
                            </p>
                        </div>
                    </div>
                    <h4 style={{ marginTop: '30px' }}>Google Just Showed Us the Future Of Gaming</h4>
                    <p style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Etiam at ultricies dui…
                    </p>
                    <p style={{ backgrounColor: '#FFF1DA', padding: '10px', borderRadius: '5px', border: '1px solid #D66464', fontFamily: "'Dancing Script', cursive", fontWeight: '700', letterSpacing: '5px', marginTop: '10px', display: 'inline-block' }}>Read More</p>
                </div>
            </div>
        </>
    );
}

export default LearnHubCard;