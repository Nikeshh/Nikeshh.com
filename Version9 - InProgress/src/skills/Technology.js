var Technology = function Technology() {
    return React.createElement(
        "div",
        { "class": "col-md-3 mb-3" },
        React.createElement(
            "div",
            { "class": "card" },
            React.createElement("img", { "class": "img-fluid", alt: "100%x280", src: "./assets/images/skills/nodejs.png" }),
            React.createElement(
                "div",
                { "class": "card-body" },
                React.createElement(
                    "h4",
                    { "class": "card-title" },
                    "NodeJS"
                ),
                React.createElement(
                    "p",
                    { "class": "card-text" },
                    "Node.js\xAE is a powerful runtime running on Chrome's V8 Javascript engine helping us to develop backend applications"
                ),
                React.createElement(
                    "a",
                    { href: "#" },
                    "LEARN MORE"
                )
            )
        )
    );
};

export default Technology;