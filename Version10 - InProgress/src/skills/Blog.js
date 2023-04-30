var Blog = function Blog() {
    return React.createElement(
        "div",
        { "class": "col-md-3 mb-3" },
        React.createElement(
            "div",
            { "class": "card" },
            React.createElement("img", { "class": "img-fluid", alt: "100%x280",
                src: "https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7c625ea379640da3ef2e24f20df7ce8d" }),
            React.createElement(
                "div",
                { "class": "card-body" },
                React.createElement(
                    "h4",
                    { "class": "card-title" },
                    "Special title treatment"
                ),
                React.createElement(
                    "p",
                    { "class": "card-text" },
                    "With supporting text below as a natural lead-in to additional content."
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

export default Blog;