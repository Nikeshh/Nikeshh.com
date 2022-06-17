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
                                                <td>
                                                    <a href="#">
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar avatar-blue mr-3">
                                                                EB
                                                            </div>
                                                            <div>
                                                                <p className="fw-bold mb-0">Ethan Black</p>
                                                                <p className="text-muted mb-0">ethan-black@example.com</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>(784) 667 8768</td>
                                                <td>Designer</td>
                                                <td>09/04/1996</td>
                                                <td>
                                                    <div className="badge badge-success badge-success-alt">
                                                        Enabled
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button className="btn btn-sm btn-icon" type="button" id="projectsAction" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="bx bx-dots-horizontal-rounded" data-toggle="tooltip" data-placement="top" title="Actions"></i>
                                                        </button>
                                                        <div className="dropdown-menu" aria-labelledby="projectsAction">
                                                            <a className="dropdown-item" href="#"><i className="bx bxs-pencil mr-2"></i> Edit Profile</a>
                                                            <a className="dropdown-item text-danger" href="#"><i className="bx bxs-trash mr-2"></i> Remove</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#">
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar avatar-pink mr-3">
                                                                JR
                                                            </div>
                                                            <div>
                                                                <p className="fw-bold mb-0">Julie Richards</p>
                                                                <p className="text-muted mb-0">julie_89@example.com</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>(937) 874 6878</td>
                                                <td>Investment Banker</td>
                                                <td>13/01/1989</td>
                                                <td>
                                                    <div className="badge badge-success badge-success-alt">
                                                        Enabled
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button className="btn btn-sm btn-icon" type="button" id="projectsAction" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="bx bx-dots-horizontal-rounded" data-toggle="tooltip" data-placement="top" title="Actions"></i>
                                                        </button>
                                                        <div className="dropdown-menu" aria-labelledby="projectsAction">
                                                            <a className="dropdown-item" href="#"><i className="bx bxs-pencil mr-2"></i> Edit Profile</a>
                                                            <a className="dropdown-item text-danger" href="#"><i className="bx bxs-trash mr-2"></i> Remove</a>
                                                        </div>
                                                    </div>
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