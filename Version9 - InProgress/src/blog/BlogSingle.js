var BlogSingle = function BlogSingle() {
    return React.createElement(
        "div",
        { "class": "blog-content" },
        React.createElement(
            "div",
            { "class": "left-content" },
            React.createElement(
                "h1",
                null,
                "Left content"
            )
        ),
        React.createElement(
            "div",
            { "class": "right-content" },
            React.createElement(
                "h1",
                null,
                "Right content"
            )
        )
    );
};

ReactDOM.render(React.createElement(BlogSingle, null), document.getElementById('blog_single'));