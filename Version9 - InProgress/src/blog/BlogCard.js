var BlogCard = function BlogCard() {
    return React.createElement(
        "div",
        { "class": "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" },
        React.createElement(
            "div",
            { "class": "col p-4 d-flex flex-column position-static" },
            React.createElement(
                "strong",
                { "class": "d-inline-block mb-2 text-primary" },
                "World"
            ),
            React.createElement(
                "h3",
                { "class": "mb-0" },
                "Featured post"
            ),
            React.createElement(
                "div",
                { "class": "mb-1 text-muted" },
                "Nov 12"
            ),
            React.createElement(
                "p",
                { "class": "card-text mb-auto" },
                "This is a wider card with supporting text below as a natural lead-in to additional content."
            ),
            React.createElement(
                "a",
                { href: "#", "class": "stretched-link" },
                "Continue reading"
            )
        ),
        React.createElement(
            "div",
            { "class": "col-auto d-none d-lg-block" },
            React.createElement(
                "svg",
                { "class": "bd-placeholder-img", width: "200", height: "250", xmlns: "http://www.w3.org/2000/svg", role: "img", "aria-label": "Placeholder: Thumbnail", preserveAspectRatio: "xMidYMid slice", focusable: "false" },
                React.createElement(
                    "title",
                    null,
                    "Placeholder"
                ),
                React.createElement("rect", { width: "100%", height: "100%", fill: "#55595c" }),
                React.createElement(
                    "text",
                    { x: "50%", y: "50%", fill: "#eceeef", dy: ".3em" },
                    "Thumbnail"
                )
            )
        )
    );
};

var blogCards = document.getElementsByName('blog_card');
for (var i = 0; i < blogCards.length; i++) {
    ReactDOM.render(React.createElement(BlogCard, null), blogCards.item(i));
}