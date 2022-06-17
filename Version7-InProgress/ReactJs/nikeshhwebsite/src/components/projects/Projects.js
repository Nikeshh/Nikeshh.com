import React from "react";
import "./projects.css";

const Projects = () => {
    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col-4">
                        <h1>Filter</h1>
                    </div>
                    <div className="container col-8">
                        <div className="projects">
                            <span className="title">Projects / Works</span>
                            <h3 className="subtitle">What Have I Done?</h3>
                            <div className="row py-5">
                                <div className="col-12">
                                    <table id="projects" className="table table-hover responsive nowrap" style={{ width: "100%" }}>
                                        <thead>
                                            <tr>
                                                <th>Client Name</th>
                                                <th>Phone Number</th>
                                                <th>Profession</th>
                                                <th>Date of Birth</th>
                                                <th>App Access</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Client name</td>
                                                <td>(784) 667 8768</td>
                                                <td>Designer</td>
                                                <td>09/04/1996</td>
                                                <td>
                                                    Enabled
                                                </td>
                                                <td>
                                                    Dropdown
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-4">
                        <h1>Filter</h1>
                    </div>
                    <div className="col-8">
                        <div className="works">
                            <span className="title">Work</span>
                            <h3 className="subtitle">What Else I Have Done?</h3>
                            <div className="work_content">
                                <table class="table">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;