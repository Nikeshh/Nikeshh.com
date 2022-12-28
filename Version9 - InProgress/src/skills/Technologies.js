import Technology from "./Technology.js";

var Technologies = function Technologies() {
    return React.createElement(
        "div",
        { "class": "row" },
        React.createElement(
            "div",
            { "class": "col-12" },
            React.createElement(
                "div",
                { "class": "row" },
                React.createElement(
                    "div",
                    { "class": "col-9" },
                    React.createElement(
                        "p",
                        null,
                        "TECHNOLOGIES"
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "col-3 ms-auto d-flex justify-content-end gap-2" },
                    React.createElement(
                        "a",
                        { "class": "btn btn-primary mb-3", href: "#skillsTechnologiesCarousel",
                            role: "button", "data-bs-slide": "prev" },
                        React.createElement("i", { "class": "fa fa-arrow-left" })
                    ),
                    React.createElement(
                        "a",
                        { "class": "btn btn-primary mb-3", href: "#skillsTechnologiesCarousel",
                            role: "button", "data-bs-slide": "next" },
                        React.createElement("i", { "class": "fa fa-arrow-right" })
                    )
                )
            ),
            React.createElement(
                "div",
                { id: "skillsTechnologiesCarousel", "class": "carousel slide", "data-bs-ride": "carousel" },
                React.createElement(
                    "div",
                    { "class": "carousel-inner" },
                    React.createElement(
                        "div",
                        { "class": "carousel-item active" },
                        React.createElement(
                            "div",
                            { "class": "row" },
                            React.createElement(Technology, null),
                            React.createElement(Technology, null),
                            React.createElement(Technology, null),
                            React.createElement(Technology, null)
                        )
                    ),
                    React.createElement(
                        "div",
                        { "class": "carousel-item" },
                        React.createElement(
                            "div",
                            { "class": "row" },
                            React.createElement(Technology, null),
                            React.createElement(Technology, null),
                            React.createElement(Technology, null),
                            React.createElement(Technology, null)
                        )
                    ),
                    React.createElement(
                        "div",
                        { "class": "carousel-item" },
                        React.createElement(
                            "div",
                            { "class": "row" },
                            React.createElement(Technology, null),
                            React.createElement(Technology, null),
                            React.createElement(Technology, null),
                            React.createElement(Technology, null)
                        )
                    )
                )
            )
        )
    );
};

export default Technologies;