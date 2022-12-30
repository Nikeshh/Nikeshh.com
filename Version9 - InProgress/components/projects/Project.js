const Project = ({ index, title, description, carousel=true }) => {
    return (
        <div className="row">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 className="display-4 fw-bold lh-1">{ title }</h1>
                <p>
                    { description }
                </p>
                <div className="links">
                    <ul className="justify-content-sm-center justify-content-md-start">
                        <li><a href="https://github.com/sanketbodke" target="blank"><i
                                    className="fab fa-github"></i></a></li>
                        <li><a href="https://codepen.io/sanketbodke"><i className="fab fa-codepen"
                                    target="blank"></i></a></li>
                        <li><a type="button" href={"project-single.html?index=" + index} target="_blank"
                                className="btn btn-outline-primary btn-lg px-4 me-md-2 fw-bold">View / Explore
                                Project</a></li>
                    </ul>
                </div>
                { carousel && 
                    <div className="d-grid gap-2 d-md-flex justify-content-end mb-4 mb-lg-3 mt-auto">
                        <a href="#projectCarousel" role="button" data-bs-slide="prev"
                            className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"><i
                                className="fa-regular fa-circle-left"></i></a>
                        <a href="#projectCarousel" role="button" data-bs-slide="next"
                            className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"><i
                                className="fa-regular fa-circle-right"></i></a>
                    </div>
                }
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img className="rounded-lg-3" src="./assets/images/placeholder.png" alt="" width="720" />
            </div>
        </div>
    );
};

export default Project;