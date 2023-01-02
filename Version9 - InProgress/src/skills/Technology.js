var Technology = function Technology(_ref) {
    var _ref$data = _ref.data,
        data = _ref$data === undefined ? { "name": "", "description": "", "image": "", "learn-more": "" } : _ref$data;

    return React.createElement(
        "div",
        { "class": "col-md-3 mb-3" },
        React.createElement(
            "div",
            { "class": "card" },
            React.createElement("img", { "class": "img-fluid", alt: data["name"], src: data["image"] }),
            React.createElement(
                "div",
                { "class": "card-body" },
                React.createElement(
                    "h4",
                    { "class": "card-title" },
                    data["name"]
                ),
                React.createElement(
                    "p",
                    { "class": "card-text" },
                    data["description"]
                ),
                React.createElement(
                    "a",
                    { href: "projects.html?learn-more=" + data["learn-more"] },
                    "LEARN MORE"
                )
            )
        )
    );
};

export default Technology;