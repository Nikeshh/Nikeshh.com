import Project from './projects/Project.js';
import { projects } from './data/data.js';

const Projects = () => {
    return (
        <div id="projectCarousel" className="carousel slide p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg" data-bs-interval="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Project index={0} title={projects[0]["title"]} description={projects[0]["description"]} />
                </div>
                {
                    projects.map((project, index) => {
                        if(index != 0) {
                            return (
                                <div className="carousel-item">
                                    <Project index={index} title={project["title"]} description={project["description"]} />
                                </div>
                            );
                        }
                    })
                }
            </div>
        </div>
    );
}

ReactDOM.render(
    <Projects />,
    document.getElementById('projects_container')
);