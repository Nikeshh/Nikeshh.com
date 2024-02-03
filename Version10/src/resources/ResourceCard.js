var ResourceCard = function ResourceCard() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "svg",
            { "class": "bd-placeholder-img rounded-circle", width: "140", height: "140", xmlns: "http://www.w3.org/2000/svg",
                role: "img", "aria-label": "Placeholder: 140x140", preserveAspectRatio: "xMidYMid slice", focusable: "false" },
            React.createElement(
                "title",
                null,
                "Placeholder"
            ),
            React.createElement("rect", { width: "100%", height: "100%", fill: "#777" }),
            React.createElement(
                "text",
                { x: "50%", y: "50%", fill: "#777",
                    dy: ".3em" },
                "140x140"
            )
        ),
        React.createElement(
            "h2",
            { "class": "fw-normal" },
            "Tutorial Contents"
        ),
        React.createElement(
            "p",
            null,
            "Some representative placeholder content for the three columns of text below the carousel. This is the first column."
        ),
        React.createElement(
            "p",
            null,
            React.createElement(
                "a",
                { "class": "btn btn-secondary", href: "#" },
                "View details \xBB"
            )
        )
    );
};

var resourceCards = document.getElementsByName('resource_card');
for (var i = 0; i < resourceCards.length; i++) {
    ReactDOM.render(React.createElement(ResourceCard, null), resourceCards.item(i));
}