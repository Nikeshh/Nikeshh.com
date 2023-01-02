import Project from "./Project.js";

const Projects = ({ tabControl, data=[] }) => {
    return (
        <div class="row mt-5">
            <div class="col-12">
                <div class="row">
                    <div class="col-9">
                        <p>PROJECTS LINKED</p>
                    </div>
                    <div class="col-3 ms-auto d-flex justify-content-end gap-2">
                        <a class="btn btn-primary mb-3" href={"#" + tabControl + "skillsProjectsCarousel"}
                            role="button" data-bs-slide="prev">
                            <i class="fa fa-arrow-left"></i>
                        </a>
                        <a class="btn btn-primary mb-3" href={"#" + tabControl + "skillsProjectsCarousel"}
                            role="button" data-bs-slide="next">
                            <i class="fa fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div id={tabControl + "skillsProjectsCarousel"} class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">
                                <Project />
                                <Project />
                                <Project />
                                <Project />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">
                                <Project />
                                <Project />
                                <Project />
                                <Project />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">
                                <Project />
                                <Project />
                                <Project />
                                <Project />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;