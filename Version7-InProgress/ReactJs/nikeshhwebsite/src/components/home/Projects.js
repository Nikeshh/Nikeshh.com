import React from "react";

const Projects = (props) => {

    const threeColumn = props.threeColumn;

    return (
        <>
            <div className="col-lg-3">
                <div className="card">
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <i className="fa fa-heart"></i>
                    </div>
                    <img src={"/logo192.png"} alt="skill" />
                    <h5>Project Title</h5>
                    <p>
                        Project description
                    </p>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="card">
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <i className="fa fa-heart"></i>
                    </div>
                    <img src={"/logo192.png"} alt="skill" />
                    <h5>Project Title</h5>
                    <p>
                        Project description
                    </p>
                </div>
            </div>
            {threeColumn ? (
                <div className="col-lg-3">
                    <div className="card">
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <i className="fa fa-heart"></i>
                        </div>
                        <img src={"/logo192.png"} alt="skill" />
                        <h5>Project Title</h5>
                        <p>
                            Project description
                        </p>
                    </div>
                </div>
            ) : (
                <div className="col-lg-3">
                    <button>More</button>
                </div>
            )}
        </>
    );
};

export default Projects;