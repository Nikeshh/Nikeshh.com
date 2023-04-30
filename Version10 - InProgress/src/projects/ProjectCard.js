var ProjectCard = function ProjectCard(_ref) {
    var id = _ref.id,
        title = _ref.title,
        description = _ref.description;

    return React.createElement(
        "div",
        { "class": "row g-0 rounded overflow-hidden flex-md-row h-md-250 position-relative" },
        React.createElement(
            "div",
            { "class": "col p-4 d-flex flex-column position-static" },
            React.createElement(
                "strong",
                { "class": "d-inline-block mb-2 text-primary" },
                "Mobile and App Development"
            ),
            React.createElement(
                "h3",
                { "class": "mb-0 blog-card-text" },
                title
            ),
            React.createElement(
                "div",
                { "class": "mb-1 text-muted" },
                "Nov 12"
            ),
            React.createElement(
                "p",
                { "class": "card-text mb-auto blog-card-text" },
                description.length > 150 ? description.substring(0, 150) + "..." : description
            ),
            React.createElement(
                "a",
                { href: "project-single.html?id=" + id, "class": "stretched-link blog-card-text" },
                "View Project"
            )
        ),
        React.createElement(
            "div",
            { "class": "col-auto d-none d-lg-block" },
            React.createElement("img", { src: "./assets/images/placeholder.png", alt: "Project Image", "class": "img-fluid" })
        )
    );
};

export default ProjectCard;