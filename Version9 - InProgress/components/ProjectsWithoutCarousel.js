import Project from './projects/Project.js';
import { projects } from './data/data.js';

const ProjectsWithoutCarousel = () => {
    return (
        <div>
            {
                projects.map((project, index) => {
                    return (
                        <div class="row mx-5 my-5 p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                            <Project index={index} title={project["title"]} description={project["description"]} carousel={false} />
                        </div>
                    )
                })
            }
        </div>
    );
}

ReactDOM.render(
    <ProjectsWithoutCarousel />,
    document.getElementById('projects_without_carousel')
);