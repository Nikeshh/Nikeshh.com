var BlogSingle = function BlogSingle() {
    return React.createElement(
        "div",
        { "class": "main-content w-100 h-100" },
        React.createElement(
            "header",
            { "class": "text-bg-dark" },
            React.createElement(
                "div",
                { "class": "container-fluid" },
                React.createElement(
                    "div",
                    { "class": "d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" },
                    React.createElement(
                        "a",
                        { href: "/", "class": "d-flex align-items-center gap-2 mb-2 mb-lg-0 text-white text-decoration-none" },
                        React.createElement("i", { "class": "fa-solid fa-arrow-left" }),
                        " How to create a ReactJS website?"
                    ),
                    React.createElement(
                        "form",
                        { "class": "col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 ms-auto", role: "search" },
                        React.createElement("input", { type: "search", "class": "form-control form-control-dark text-bg-dark", placeholder: "Search...",
                            "aria-label": "Search" })
                    ),
                    React.createElement(
                        "div",
                        { "class": "dropdown" },
                        React.createElement(
                            "a",
                            { href: "#",
                                "class": "d-flex align-items-center justify-content-center p-3 link-light text-decoration-none dropdown-toggle",
                                "data-bs-toggle": "dropdown", "aria-expanded": "false" },
                            "Blog"
                        ),
                        React.createElement(
                            "ul",
                            { "class": "dropdown-menu text-small shadow" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { "class": "dropdown-item", href: "#" },
                                    "New project..."
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { "class": "dropdown-item", href: "#" },
                                    "Settings"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { "class": "dropdown-item", href: "#" },
                                    "Profile"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement("hr", { "class": "dropdown-divider" })
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { "class": "dropdown-item", href: "#" },
                                    "Sign out"
                                )
                            )
                        )
                    )
                )
            )
        ),
        React.createElement(
            "div",
            { "class": "m-1 m-3 m-md-5" },
            React.createElement(
                "div",
                { "class": "row" },
                React.createElement("img", { src: "./assets/images/blog/blog-banner.jpeg", alt: "Blog Image", "class": "img-fluid" })
            ),
            React.createElement(
                "div",
                { "class": "row g-5 mt-2" },
                React.createElement(
                    "div",
                    { "class": "col-md-8" },
                    React.createElement(
                        "article",
                        { "class": "blog-post" },
                        React.createElement(
                            "h2",
                            { "class": "blog-post-title mb-1" },
                            "How to create a ReactJS website?"
                        ),
                        React.createElement(
                            "p",
                            { "class": "blog-post-meta" },
                            "January 1, 2023 by ",
                            React.createElement(
                                "a",
                                { href: "#" },
                                "Nikeshh"
                            )
                        ),
                        React.createElement(
                            "div",
                            { "class": "social-links" },
                            React.createElement(
                                "p",
                                { "class": "fst-italic" },
                                "Share via"
                            ),
                            React.createElement(
                                "ul",
                                { "class": "justify-content-sm-center justify-content-md-start" },
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://github.com/Nikeshh", target: "_blank" },
                                        React.createElement("i", {
                                            "class": "fab fa-github" })
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://www.linkedin.com/in/nikeshh/", target: "_blank" },
                                        React.createElement("i", {
                                            "class": "fab fa-linkedin-in" })
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://www.instagram.com/nikeshhvijayabaskaran/", target: "_blank" },
                                        React.createElement("i", {
                                            "class": "fab fa-instagram" })
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://www.facebook.com/profile.php?id=100003060160743",
                                            target: "_blank" },
                                        React.createElement("i", { "class": "fab fa-facebook" })
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://twitter.com/NikeshhV", target: "_blank" },
                                        React.createElement("i", {
                                            "class": "fab fa-twitter" })
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://codepen.io/nikeshh" },
                                        React.createElement("i", { "class": "fab fa-codepen",
                                            target: "_blank" })
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://medium.com/@nikeshhvijayabaskaran" },
                                        React.createElement("i", { "class": "fab fa-medium",
                                            target: "_blank" })
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "h3",
                            { "class": "pb-4 mb-4 fst-italic border-bottom" },
                            "From the Firehose"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "This blog post shows a few different types of content that\u2019s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected."
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "p",
                            null,
                            "This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text."
                        ),
                        React.createElement(
                            "h2",
                            null,
                            "Blockquotes"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "This is an example blockquote in action:"
                        ),
                        React.createElement(
                            "blockquote",
                            { "class": "blockquote" },
                            React.createElement(
                                "p",
                                null,
                                "Quoted text goes here."
                            )
                        ),
                        React.createElement(
                            "p",
                            null,
                            "This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text."
                        ),
                        React.createElement(
                            "h3",
                            null,
                            "Example lists"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "First list item"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Second list item with a longer description"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Third list item to close it out"
                            )
                        ),
                        React.createElement(
                            "p",
                            null,
                            "And this is an ordered list:"
                        ),
                        React.createElement(
                            "ol",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "First list item"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Second list item with a longer description"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Third list item to close it out"
                            )
                        ),
                        React.createElement(
                            "p",
                            null,
                            "And this is a definition list:"
                        ),
                        React.createElement(
                            "dl",
                            null,
                            React.createElement(
                                "dt",
                                null,
                                "HyperText Markup Language (HTML)"
                            ),
                            React.createElement(
                                "dd",
                                null,
                                "The language used to describe and define the content of a Web page"
                            ),
                            React.createElement(
                                "dt",
                                null,
                                "Cascading Style Sheets (CSS)"
                            ),
                            React.createElement(
                                "dd",
                                null,
                                "Used to describe the appearance of Web content"
                            ),
                            React.createElement(
                                "dt",
                                null,
                                "JavaScript (JS)"
                            ),
                            React.createElement(
                                "dd",
                                null,
                                "The programming language used to build advanced Web sites and applications"
                            )
                        ),
                        React.createElement(
                            "h2",
                            null,
                            "Inline HTML elements"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "HTML defines a long list of available inline tags, a complete list of which can be found on the ",
                            React.createElement(
                                "a",
                                {
                                    href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element" },
                                "Mozilla Developer Network"
                            ),
                            "."
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "strong",
                                    null,
                                    "To bold text"
                                ),
                                ", use ",
                                React.createElement(
                                    "code",
                                    {
                                        "class": "language-plaintext highlighter-rouge" },
                                    "<strong>"
                                ),
                                "."
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "em",
                                    null,
                                    "To italicize text"
                                ),
                                ", use ",
                                React.createElement(
                                    "code",
                                    {
                                        "class": "language-plaintext highlighter-rouge" },
                                    "<em>"
                                ),
                                "."
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Abbreviations, like ",
                                React.createElement(
                                    "abbr",
                                    { title: "HyperText Markup Language" },
                                    "HTML"
                                ),
                                " should use ",
                                React.createElement(
                                    "code",
                                    {
                                        "class": "language-plaintext highlighter-rouge" },
                                    "<abbr>"
                                ),
                                ", with an optional ",
                                React.createElement(
                                    "code",
                                    {
                                        "class": "language-plaintext highlighter-rouge" },
                                    "title"
                                ),
                                " attribute for the full phrase."
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Citations, like ",
                                React.createElement(
                                    "cite",
                                    null,
                                    "\u2014 Mark Otto"
                                ),
                                ", should use ",
                                React.createElement(
                                    "code",
                                    {
                                        "class": "language-plaintext highlighter-rouge" },
                                    "<cite>"
                                ),
                                "."
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "del",
                                    null,
                                    "Deleted"
                                ),
                                " text should use ",
                                React.createElement(
                                    "code",
                                    {
                                        "class": "language-plaintext highlighter-rouge" },
                                    "<del>"
                                ),
                                " and ",
                                React.createElement(
                                    "ins",
                                    null,
                                    "inserted"
                                ),
                                " text should use ",
                                React.createElement(
                                    "code",
                                    { "class": "language-plaintext highlighter-rouge" },
                                    "<ins>"
                                ),
                                "."
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Superscript ",
                                React.createElement(
                                    "sup",
                                    null,
                                    "text"
                                ),
                                " uses ",
                                React.createElement(
                                    "code",
                                    {
                                        "class": "language-plaintext highlighter-rouge" },
                                    "<sup>"
                                ),
                                " and subscript ",
                                React.createElement(
                                    "sub",
                                    null,
                                    "text"
                                ),
                                " uses",
                                React.createElement(
                                    "code",
                                    { "class": "language-plaintext highlighter-rouge" },
                                    "<sub>"
                                ),
                                "."
                            )
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Most of these elements are styled by browsers with few modifications on our part."
                        ),
                        React.createElement(
                            "h2",
                            null,
                            "Heading"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text."
                        ),
                        React.createElement(
                            "h3",
                            null,
                            "Sub-heading"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text."
                        ),
                        React.createElement(
                            "pre",
                            null,
                            React.createElement(
                                "code",
                                null,
                                "Example code block"
                            )
                        ),
                        React.createElement(
                            "p",
                            null,
                            "This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout."
                        )
                    ),
                    React.createElement(
                        "article",
                        { "class": "blog-post" },
                        React.createElement(
                            "h2",
                            { "class": "blog-post-title mb-1" },
                            "Another blog post"
                        ),
                        React.createElement(
                            "p",
                            { "class": "blog-post-meta" },
                            "December 23, 2020 by ",
                            React.createElement(
                                "a",
                                { href: "#" },
                                "Jacob"
                            )
                        ),
                        React.createElement(
                            "p",
                            null,
                            "This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text."
                        ),
                        React.createElement(
                            "blockquote",
                            null,
                            React.createElement(
                                "p",
                                null,
                                "Longer quote goes here, maybe with some ",
                                React.createElement(
                                    "strong",
                                    null,
                                    "emphasized text"
                                ),
                                " in the middle of it."
                            )
                        ),
                        React.createElement(
                            "p",
                            null,
                            "This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text."
                        ),
                        React.createElement(
                            "h3",
                            null,
                            "Example table"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "And don't forget about tables in these posts:"
                        ),
                        React.createElement(
                            "table",
                            { "class": "table" },
                            React.createElement(
                                "thead",
                                null,
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "th",
                                        null,
                                        "Name"
                                    ),
                                    React.createElement(
                                        "th",
                                        null,
                                        "Upvotes"
                                    ),
                                    React.createElement(
                                        "th",
                                        null,
                                        "Downvotes"
                                    )
                                )
                            ),
                            React.createElement(
                                "tbody",
                                null,
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        "Alice"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "10"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "11"
                                    )
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        "Bob"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "4"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "3"
                                    )
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        "Charlie"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "7"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "9"
                                    )
                                )
                            ),
                            React.createElement(
                                "tfoot",
                                null,
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        "Totals"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "21"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "23"
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "p",
                            null,
                            "This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout."
                        )
                    ),
                    React.createElement(
                        "article",
                        { "class": "blog-post" },
                        React.createElement(
                            "h2",
                            { "class": "blog-post-title mb-1" },
                            "New feature"
                        ),
                        React.createElement(
                            "p",
                            { "class": "blog-post-meta" },
                            "December 14, 2020 by ",
                            React.createElement(
                                "a",
                                { href: "#" },
                                "Chris"
                            )
                        ),
                        React.createElement(
                            "p",
                            null,
                            "This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text."
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "First list item"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Second list item with a longer description"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Third list item to close it out"
                            )
                        ),
                        React.createElement(
                            "p",
                            null,
                            "This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout."
                        )
                    ),
                    React.createElement(
                        "nav",
                        { "class": "blog-pagination", "aria-label": "Pagination" },
                        React.createElement(
                            "a",
                            { "class": "btn btn-outline-primary rounded-pill", href: "#" },
                            "Previous"
                        ),
                        React.createElement(
                            "a",
                            { "class": "btn btn-outline-secondary rounded-pill disabled" },
                            "Next"
                        )
                    ),
                    React.createElement(
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
                                { "class": "bd-placeholder-img", width: "200", height: "250", xmlns: "http://www.w3.org/2000/svg", role: "img",
                                    "aria-label": "Placeholder: Thumbnail", preserveAspectRatio: "xMidYMid slice", focusable: "false" },
                                React.createElement(
                                    "title",
                                    null,
                                    "Placeholder"
                                ),
                                React.createElement("rect", { width: "100%", height: "100%", fill: "#55595c" }),
                                React.createElement(
                                    "text",
                                    { x: "50%", y: "50%", fill: "#eceeef",
                                        dy: ".3em" },
                                    "Thumbnail"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { "class": "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" },
                        React.createElement(
                            "div",
                            { "class": "col p-4 d-flex flex-column position-static" },
                            React.createElement(
                                "strong",
                                { "class": "d-inline-block mb-2 text-success" },
                                "Design"
                            ),
                            React.createElement(
                                "h3",
                                { "class": "mb-0" },
                                "Post title"
                            ),
                            React.createElement(
                                "div",
                                { "class": "mb-1 text-muted" },
                                "Nov 11"
                            ),
                            React.createElement(
                                "p",
                                { "class": "mb-auto" },
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
                                { "class": "bd-placeholder-img", width: "200", height: "250", xmlns: "http://www.w3.org/2000/svg", role: "img",
                                    "aria-label": "Placeholder: Thumbnail", preserveAspectRatio: "xMidYMid slice", focusable: "false" },
                                React.createElement(
                                    "title",
                                    null,
                                    "Placeholder"
                                ),
                                React.createElement("rect", { width: "100%", height: "100%", fill: "#55595c" }),
                                React.createElement(
                                    "text",
                                    { x: "50%", y: "50%", fill: "#eceeef",
                                        dy: ".3em" },
                                    "Thumbnail"
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "col-12 col-md-4 p-3" },
                    React.createElement(
                        "div",
                        { "class": "position-sticky", style: { top: '2rem' } },
                        React.createElement(
                            "div",
                            { "class": "row" },
                            React.createElement(
                                "p",
                                null,
                                "COMMENTS"
                            )
                        ),
                        React.createElement(
                            "div",
                            { "class": "comments" },
                            React.createElement(
                                "div",
                                { "class": "row ms-2 ms-md-0 me-2 me-md-0" },
                                React.createElement(
                                    "div",
                                    { "class": "col-2" },
                                    React.createElement("img", { src: "./assets/images/logo.png", alt: "Profile Icon", "class": "img-thumbnail rounded-circle" })
                                ),
                                React.createElement(
                                    "div",
                                    { "class": "col-10 comment rounded-2 d-flex flex-column" },
                                    React.createElement(
                                        "div",
                                        { "class": "fst-italic" },
                                        "\"That is an amazing website\""
                                    ),
                                    React.createElement(
                                        "span",
                                        { "class": "ms-auto mt-auto" },
                                        "-- JOHN DOE"
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { "class": "row mt-2 ms-2 ms-md-0 me-2 me-md-0" },
                                React.createElement(
                                    "div",
                                    { "class": "col-2" },
                                    React.createElement("img", { src: "./assets/images/logo.png", alt: "Profile Icon", "class": "img-thumbnail rounded-circle" })
                                ),
                                React.createElement(
                                    "div",
                                    { "class": "col-10 comment rounded-2 d-flex flex-column" },
                                    React.createElement(
                                        "div",
                                        { "class": "fst-italic" },
                                        "\"That is an amazing website\""
                                    ),
                                    React.createElement(
                                        "span",
                                        { "class": "ms-auto" },
                                        "-- JOHN DOE"
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

ReactDOM.render(React.createElement(BlogSingle, null), document.getElementById('blog_single'));