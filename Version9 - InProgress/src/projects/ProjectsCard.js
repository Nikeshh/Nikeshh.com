import ProjectCard from './ProjectCard.js';

/**
 * Alternative version - Project.js
 */
var ProjectsCard = function ProjectsCard(_ref) {
    var _ref$projects = _ref.projects,
        projects = _ref$projects === undefined ? [] : _ref$projects;


    var projectRows = function projectRows() {
        var projectsRow = [];
        var id = 0;
        var projectsData = projects.slice();
        var numberOfThrees = projectsData.length / 3;
        for (var i = 0; i < numberOfThrees; i++) {
            var projectItems = [];
            for (var j = 0; j < 3; j++) {
                var boxNumber = j + 1;
                var boxName = "box" + boxNumber;
                if (projectsData.length == 0) {
                    break;
                }
                var project = projectsData.shift();
                projectItems.push(React.createElement(
                    "div",
                    { "class": "box " + boxName },
                    React.createElement(ProjectCard, { id: id, title: project["title"], description: project["description"] })
                ));
                id = id + 1;
            }
            projectsRow.push(React.createElement(
                "div",
                { "class": "boxes" },
                projectItems
            ));
        }
        return projectsRow;
    };

    return React.createElement(
        "div",
        null,
        projectRows()
    );
};

export default ProjectsCard;