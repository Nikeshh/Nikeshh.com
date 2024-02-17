import Blog from "./Blog.js";

var Blogs = function Blogs(_ref) {
    var tabControl = _ref.tabControl,
        _ref$data = _ref.data,
        data = _ref$data === undefined ? [] : _ref$data;

    return React.createElement(
        "div",
        { "class": "row mt-5" },
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
                        "BLOGS LINKED"
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "col-3 ms-auto d-flex justify-content-end gap-2" },
                    React.createElement(
                        "a",
                        { "class": "btn btn-primary mb-3", href: "#" + tabControl + "skillsBlogsCarousel",
                            role: "button", "data-bs-slide": "prev" },
                        React.createElement("i", { "class": "fa fa-arrow-left" })
                    ),
                    React.createElement(
                        "a",
                        { "class": "btn btn-primary mb-3", href: "#" + tabControl + "skillsBlogsCarousel",
                            role: "button", "data-bs-slide": "next" },
                        React.createElement("i", { "class": "fa fa-arrow-right" })
                    )
                )
            ),
            React.createElement(
                "div",
                { id: tabControl + "skillsBlogsCarousel", "class": "carousel slide",
                    "data-bs-ride": "carousel" },
                React.createElement(
                    "div",
                    { "class": "carousel-inner" },
                    React.createElement(
                        "div",
                        { "class": "carousel-item active" },
                        React.createElement(
                            "div",
                            { "class": "row" },
                            React.createElement(Blog, null),
                            React.createElement(Blog, null),
                            React.createElement(Blog, null),
                            React.createElement(Blog, null)
                        )
                    ),
                    React.createElement(
                        "div",
                        { "class": "carousel-item" },
                        React.createElement(
                            "div",
                            { "class": "row" },
                            React.createElement(Blog, null),
                            React.createElement(Blog, null),
                            React.createElement(Blog, null),
                            React.createElement(Blog, null)
                        )
                    ),
                    React.createElement(
                        "div",
                        { "class": "carousel-item" },
                        React.createElement(
                            "div",
                            { "class": "row" },
                            React.createElement(Blog, null),
                            React.createElement(Blog, null),
                            React.createElement(Blog, null),
                            React.createElement(Blog, null)
                        )
                    )
                )
            )
        )
    );
};

export default Blogs;