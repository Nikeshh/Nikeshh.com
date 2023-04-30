import Project from './projects/Project.js';
import { projects } from './data/data.js';

/**
 * Not used currently
 */
var ProjectsWithoutCarousel = function ProjectsWithoutCarousel() {
    return React.createElement(
        'div',
        null,
        projects.map(function (project, index) {
            return React.createElement(
                'div',
                { 'class': 'row mx-5 my-5 p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg' },
                React.createElement(Project, { index: index, title: project["title"], description: project["description"], carousel: false })
            );
        })
    );
};

ReactDOM.render(React.createElement(ProjectsWithoutCarousel, null), document.getElementById('projects_without_carousel'));