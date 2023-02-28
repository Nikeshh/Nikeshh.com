var SkillCard = function SkillCard(_ref) {
    var data = _ref.data,
        name = _ref.name;

    return React.createElement(
        "div",
        { "class": "row g-0 rounded overflow-hidden flex-md-row h-md-250 position-relative" },
        React.createElement(
            "div",
            { "class": "col p-4 d-flex flex-column position-static" },
            React.createElement(
                "strong",
                { "class": "d-inline-block mb-2 text-primary" },
                name
            ),
            React.createElement(
                "h3",
                { "class": "mb-0 blog-card-text" },
                data["name"]
            ),
            React.createElement(
                "div",
                { "class": "mb-1 text-muted" },
                data["learn-more"]
            ),
            React.createElement(
                "p",
                { "class": "card-text mb-auto blog-card-text" },
                data["description"].length > 150 ? data["description"].substring(0, 150) + "..." : data["description"]
            ),
            React.createElement(
                "a",
                { href: "skill-single.html?learn-more=" + data["learn-more"], "class": "stretched-link blog-card-text" },
                "Learn More"
            )
        ),
        React.createElement(
            "div",
            { "class": "col-auto d-none d-lg-block" },
            React.createElement("img", { alt: data["name"], src: data["image"], "class": "img-fluid" })
        )
    );
};

export default SkillCard;