import ProjectsCard from "./projects/ProjectsCard.js";
import { projects } from './data/data.js';

const ProjectsMainContainer = () => {
    return (
        <ProjectsCard projects={projects} />
    );
}

ReactDOM.render(
    <ProjectsMainContainer />,
    document.getElementById('projects_main_container')
);