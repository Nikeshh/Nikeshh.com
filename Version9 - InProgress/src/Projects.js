import Project from './projects/Project.js';
import { projects } from './data/data.js';

/**
 * Used in the home page
 */
var Projects = function Projects() {
    return React.createElement(
        'div',
        { id: 'projectCarousel', className: 'carousel slide p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg', 'data-bs-interval': 'false' },
        React.createElement(
            'div',
            { className: 'carousel-inner' },
            React.createElement(
                'div',
                { className: 'carousel-item active' },
                React.createElement(Project, { index: 0, title: projects[0]["title"], description: projects[0]["description"] })
            ),
            projects.map(function (project, index) {
                if (index != 0) {
                    return React.createElement(
                        'div',
                        { className: 'carousel-item' },
                        React.createElement(Project, { index: index, title: project["title"], description: project["description"] })
                    );
                }
            })
        )
    );
};

ReactDOM.render(React.createElement(Projects, null), document.getElementById('projects_container'));