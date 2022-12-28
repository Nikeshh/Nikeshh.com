import Project from './Project.js';

var Projects = function Projects() {
    return React.createElement(
        "div",
        { id: "projectCarousel", className: "carousel slide p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg", "data-bs-ride": "carousel" },
        React.createElement(
            "div",
            { className: "carousel-inner" },
            React.createElement(
                "div",
                { className: "carousel-item active" },
                React.createElement(Project, null)
            ),
            React.createElement(
                "div",
                { className: "carousel-item" },
                React.createElement(Project, null)
            )
        )
    );
};

ReactDOM.render(React.createElement(Projects, null), document.getElementById('projects_container'));