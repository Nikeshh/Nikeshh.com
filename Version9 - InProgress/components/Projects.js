import Project from './Project.js';

const Projects = () => {
    return (
        <div id="projectCarousel" className="carousel slide p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Project />
                </div>
                <div className="carousel-item">
                    <Project />
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
    <Projects />,
    document.getElementById('projects_container')
);