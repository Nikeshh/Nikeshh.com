import React from "react";

const Projects = (props) => {
    return (
        <>
            <div className="row" style={{ marginTop: "50px" }}>
                <h3 style={{ marginBottom: '30px' }}>{props.name}</h3>
                <div className="row">
                    <div className="col" style={{ display:'flex', justifyContent: 'center' }}>
                        <div className="project">
                            <div className="card" style={{ width: "18rem", borderRadius: "10px" }}>
                                <div style={{ padding: '5px'}}>
                                    <i class="fa-brands fa-gratipay fa-2xl" style={{ position: 'absolute', top: '0', right: '-15px' }}></i>
                                    <img src={"./assets/images/loading.gif"} className="card-img-top" alt="Project" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-text" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: '700' }}>
                                        Project Title
                                    </h5>
                                    <p className="card-text" style={{ fontFamily: "'Montserrat', sans-serif", fontStyle: 'italic' }}>
                                        Engrossed listening. Park gate sell they west hard for the. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col" style={{ display:'flex', justifyContent: 'center' }}>
                        <div className="project">
                            <div className="card" style={{ width: "18rem", borderRadius: "10px" }}>
                                <div style={{ padding: '5px'}}>
                                    <i class="fa-brands fa-gratipay fa-2xl" style={{ position: 'absolute', top: '0', right: '-15px' }}></i>
                                    <img src={"./assets/images/loading.gif"} className="card-img-top" alt="Project" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-text" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: '700' }}>
                                        Project Title
                                    </h5>
                                    <p className="card-text" style={{ fontFamily: "'Montserrat', sans-serif", fontStyle: 'italic' }}>
                                        Engrossed listening. Park gate sell they west hard for the. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 project" style={{ display:'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <button className="btn btn-warning" style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "0px", borderBottomLeftRadius: "0px", borderBottomRightRadius: "10px"}}><span>More</span></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;