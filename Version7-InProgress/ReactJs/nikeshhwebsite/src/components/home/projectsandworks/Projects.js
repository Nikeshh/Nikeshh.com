import React from "react";

const Projects = (props) => {
    return (
        <>
            <div className="row" style={{ marginTop: "90px" }}>
                <h3>{props.name}</h3>
                <div className="row">
                    <div className="col">
                        <div className="card project" style={{width: "18rem", borderRadius: "10px"}}>
                            <i class="favorite fa-brands fa-gratipay fa-xl"></i>
                            <img src={"./assets/images/loading.gif"} className="card-img-top" alt="Project" style={{ padding: "50px" }} />
                            <div className="card-body">
                                <h4>Project Title</h4>
                                <p className="card-text">Engrossed listening. Park gate sell they west hard for the.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card project" style={{width: "18rem", borderRadius: "10px"}}>
                            <i class="favorite fa-brands fa-gratipay fa-xl"></i>
                            <img src={"./assets/images/loading.gif"} className="card-img-top" alt="Project" style={{ padding: "50px" }} />
                            <div className="card-body">
                                <h4>Project Title</h4>
                                <p className="card-text">Engrossed listening. Park gate sell they west hard for the.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <button className="btn btn-warning" style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "0px", borderBottomLeftRadius: "0px", borderBottomRightRadius: "10px"}}><span>More</span></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;