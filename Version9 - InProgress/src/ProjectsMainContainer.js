import ProjectsCard from "./projects/ProjectsCard.js";
import { projects } from './data/data.js';

var ProjectsMainContainer = function ProjectsMainContainer() {
    return React.createElement(ProjectsCard, { projects: projects });
};

ReactDOM.render(React.createElement(ProjectsMainContainer, null), document.getElementById('projects_main_container'));