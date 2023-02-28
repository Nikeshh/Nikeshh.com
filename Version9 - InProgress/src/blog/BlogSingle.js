var BlogSingle = function BlogSingle() {
    return React.createElement(
        "div",
        { "class": "blog-content" },
        React.createElement(
            "div",
            { "class": "left-content" },
            React.createElement("img", { src: "./assets/images/blog1.png", alt: "", "class": "content-image" }),
            React.createElement(
                "div",
                { "class": "title" },
                React.createElement(
                    "h1",
                    null,
                    "Image Similarity Using Deep CNN: Theory To Code"
                )
            ),
            React.createElement(
                "div",
                { "class": "meta-details" },
                React.createElement(
                    "div",
                    { "class": "author-details" },
                    React.createElement("i", { "class": "bi bi-person" }),
                    React.createElement(
                        "p",
                        null,
                        "DeepLobe"
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "time-details" },
                    React.createElement("i", { "class": "bi bi-clock-history" }),
                    React.createElement(
                        "p",
                        null,
                        "December 9, 2021"
                    )
                )
            )
        ),
        React.createElement(
            "div",
            { "class": "right-content" },
            React.createElement(
                "div",
                { "class": "recent-posts" },
                React.createElement(
                    "p",
                    { "class": "title" },
                    "Recent Posts"
                ),
                React.createElement(
                    "p",
                    { "class": "post" },
                    "Top 7 No-Code AI Platforms That Are Making ML Accessible"
                ),
                React.createElement(
                    "p",
                    { "class": "post" },
                    "Edge AI for Secure AI Applications"
                ),
                React.createElement(
                    "p",
                    { "class": "post" },
                    "Geospatial AI: A Data-Centric Approach for Growth & Development"
                ),
                React.createElement(
                    "p",
                    { "class": "post" },
                    "Synthetic Data: The Future of Computer Vision"
                ),
                React.createElement(
                    "p",
                    { "class": "post" },
                    "6 Best Practices Of Data Labeling for Object Detection Models"
                )
            )
        )
    );
};

ReactDOM.render(React.createElement(BlogSingle, null), document.getElementById('blog_single'));