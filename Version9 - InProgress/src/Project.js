var Project = function Project(_ref) {
    var title = _ref.title,
        description = _ref.description;

    return React.createElement(
        "div",
        { className: "row" },
        React.createElement(
            "div",
            { className: "col-lg-7 p-3 p-lg-5 pt-lg-3" },
            React.createElement(
                "h1",
                { className: "display-4 fw-bold lh-1" },
                title
            ),
            React.createElement(
                "p",
                null,
                description
            ),
            React.createElement(
                "div",
                { className: "links" },
                React.createElement(
                    "ul",
                    { className: "justify-content-sm-center justify-content-md-start" },
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "https://github.com/sanketbodke", target: "blank" },
                            React.createElement("i", {
                                className: "fab fa-github" })
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "https://codepen.io/sanketbodke" },
                            React.createElement("i", { className: "fab fa-codepen",
                                target: "blank" })
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { type: "button", href: "https://www.rtrix.in", target: "_blank",
                                className: "btn btn-outline-primary btn-lg px-4 me-md-2 fw-bold" },
                            "View Project"
                        )
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "d-grid gap-2 d-md-flex justify-content-end mb-4 mb-lg-3 mt-auto" },
                React.createElement(
                    "a",
                    { href: "#projectCarousel", role: "button", "data-bs-slide": "prev",
                        className: "btn btn-primary btn-lg px-4 me-md-2 fw-bold" },
                    React.createElement("i", {
                        className: "fa-regular fa-circle-left" })
                ),
                React.createElement(
                    "a",
                    { href: "#projectCarousel", role: "button", "data-bs-slide": "next",
                        className: "btn btn-primary btn-lg px-4 me-md-2 fw-bold" },
                    React.createElement("i", {
                        className: "fa-regular fa-circle-right" })
                )
            )
        ),
        React.createElement(
            "div",
            { className: "col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg" },
            React.createElement("img", { className: "rounded-lg-3", src: "./assets/images/test.png", alt: "", width: "720" })
        )
    );
};

export default Project;