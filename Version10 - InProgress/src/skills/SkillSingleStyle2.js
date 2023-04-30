function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Not Currently Used
 */
var SkillSingle = function SkillSingle() {

    React.useEffect(function () {
        var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        var tooltipList = [].concat(_toConsumableArray(tooltipTriggerList)).map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }, []);

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
                        { href: "/", "class": "d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" },
                        React.createElement("i", { "class": "fa-solid fa-arrow-left me-2" }),
                        " NodeJS"
                    ),
                    React.createElement(
                        "div",
                        { "class": "tag ms-2 border border-primary p-2 rounded-2 text-white-50", "data-bs-html": "true",
                            "data-bs-toggle": "tooltip", "data-bs-placement": "bottom",
                            "data-bs-title": "<em>Tag:</em> <u><b>Web design</b></u>" },
                        "Web design"
                    ),
                    React.createElement(
                        "div",
                        { "class": "tag ms-2 border border-primary p-2 rounded-2 text-white-50", "data-bs-html": "true",
                            "data-bs-toggle": "tooltip", "data-bs-placement": "bottom", "data-bs-title": "<em>Tag:</em> <u><b>Web</b></u>" },
                        "Web"
                    ),
                    React.createElement(
                        "div",
                        { "class": "tag ms-2 border border-primary p-2 rounded-2 text-white-50", "data-bs-html": "true",
                            "data-bs-toggle": "tooltip", "data-bs-placement": "bottom", "data-bs-title": "<em>Tag:</em> <u><b>Android</b></u>" },
                        "Android"
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
                            "Skills"
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
            { "class": "m-3 m-md-5" },
            React.createElement(
                "div",
                { "class": "d-flex flex-wrap justify-content-between align-items-center" },
                React.createElement(
                    "h1",
                    { "class": "display-6" },
                    "NODEJS"
                ),
                React.createElement(
                    "div",
                    { "class": "skill-level show-9 d-flex flex-wrap justify-content-md-end" },
                    React.createElement(
                        "span",
                        null,
                        "\xA0"
                    ),
                    React.createElement(
                        "span",
                        null,
                        "\xA0"
                    ),
                    React.createElement(
                        "span",
                        null,
                        "\xA0"
                    ),
                    React.createElement(
                        "span",
                        null,
                        "\xA0"
                    ),
                    React.createElement(
                        "span",
                        null,
                        "\xA0"
                    ),
                    React.createElement(
                        "span",
                        null,
                        "\xA0"
                    ),
                    React.createElement(
                        "span",
                        null,
                        "\xA0"
                    ),
                    React.createElement(
                        "span",
                        null,
                        "\xA0"
                    ),
                    React.createElement(
                        "span",
                        null,
                        "\xA0"
                    ),
                    React.createElement(
                        "span",
                        null,
                        "\xA0"
                    )
                )
            ),
            React.createElement(
                "div",
                { "class": "row" },
                React.createElement(
                    "div",
                    { "class": "col-12 col-md-12 skill-details shadow-lg p-3 bg-white rounded" },
                    React.createElement(
                        "div",
                        { "class": "d-flex gap-2 flex-wrap" },
                        React.createElement(
                            "div",
                            { "class": "p-2 border border-primary rounded-2" },
                            "CONTRIBUTE"
                        ),
                        React.createElement(
                            "div",
                            { "class": "p-2 border border-primary rounded-2" },
                            "LINKED BLOGS"
                        ),
                        React.createElement(
                            "div",
                            { "class": "p-2 border border-primary rounded-2" },
                            "LINKED PROJECTS"
                        ),
                        React.createElement(
                            "div",
                            { "class": "p-2 border border-primary rounded-2 ms-md-auto" },
                            "CONTACT ME"
                        ),
                        React.createElement(
                            "div",
                            { "class": "p-2 border border-danger rounded-circle" },
                            "\u2764\uFE0F"
                        )
                    ),
                    React.createElement(
                        "div",
                        { "class": "overflow-scroll skill-content mt-3" },
                        React.createElement("img", { src: "./assets/images/skills/nodejs.png", alt: "", "class": "img-fluid img-thumbnail w-100 h-75" }),
                        React.createElement(
                            "div",
                            { "class": "mt-2" },
                            React.createElement(
                                "h2",
                                null,
                                "What is Node.js?"
                            ),
                            React.createElement(
                                "ul",
                                null,
                                React.createElement(
                                    "li",
                                    null,
                                    "Node.js is an open source server environment"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "Node.js is free"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "Node.js uses JavaScript on the server"
                                )
                            ),
                            React.createElement(
                                "h2",
                                null,
                                "Why Node.js?"
                            ),
                            React.createElement(
                                "p",
                                null,
                                React.createElement(
                                    "strong",
                                    null,
                                    "Node.js uses asynchronous programming!"
                                )
                            ),
                            React.createElement(
                                "p",
                                null,
                                "A common task for a web server can be to open a file on the server and return the content to the client."
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Here is how PHP or ASP handles a file request:"
                            ),
                            React.createElement(
                                "ol",
                                null,
                                React.createElement(
                                    "li",
                                    null,
                                    "Sends the task to the computer's file system."
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "Waits while the file system opens and reads the file."
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "Returns the content to the client."
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "Ready to handle the next request."
                                )
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Here is how Node.js handles a file request:"
                            ),
                            React.createElement(
                                "ol",
                                null,
                                React.createElement(
                                    "li",
                                    null,
                                    "Sends the task to the computer's file system."
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "Ready to handle the next request."
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "When the file system has opened and read the file, the server returns the content to the client."
                                )
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Node.js eliminates the waiting, and simply continues with the next request."
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient."
                            ),
                            React.createElement("hr", null),
                            React.createElement(
                                "h2",
                                null,
                                "What Can Node.js Do?"
                            ),
                            React.createElement(
                                "ul",
                                null,
                                React.createElement(
                                    "li",
                                    null,
                                    "Node.js can generate dynamic page content"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "Node.js can create, open, read, write, delete, and close files on the server"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "Node.js can collect form data"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "Node.js can add, delete, modify data in your database"
                                )
                            ),
                            React.createElement("hr", null),
                            React.createElement(
                                "h2",
                                null,
                                "What is a Node.js File?"
                            ),
                            React.createElement(
                                "ul",
                                null,
                                React.createElement(
                                    "li",
                                    null,
                                    "Node.js files contain tasks that will be executed on certain events"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "A typical event is someone trying to access a port on the server"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "Node.js files must be initiated on the server before having any effect"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "Node.js files have extension \".js\""
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

ReactDOM.render(React.createElement(SkillSingle, null), document.getElementById('skill_single'));