var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import SkillsCardWithoutCarousel from "../skills/SkillsCardWithoutCarousel.js";
import { skillsAndServices } from '../data/data.js';

var ExploreContainer = function ExploreContainer() {
    var _React$useState = React.useState(""),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        name = _React$useState2[0],
        setName = _React$useState2[1];

    var _React$useState3 = React.useState([]),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        technologies = _React$useState4[0],
        setTechnologies = _React$useState4[1];

    var _React$useState5 = React.useState([]),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        blogs = _React$useState6[0],
        setBlogs = _React$useState6[1];

    var _React$useState7 = React.useState([]),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        projects = _React$useState8[0],
        setProjects = _React$useState8[1];

    React.useEffect(function () {
        var modalContainer = document.getElementById("modal-container");
        var closeModal = document.getElementById("close-modal");
        var body = document.body;
        closeModal.addEventListener('click', function () {
            modalContainer.classList.add("out");
            body.classList.remove("modal-active");
        }, false);
    }, []);

    var explore = function explore(tag, name) {
        setName(name);
        var data = skillsAndServices[tag];
        setTechnologies(data["technologies"]);
        setBlogs(data["blogs"]);
        setProjects(data["projects"]);

        var modalContainer = document.getElementById("modal-container");
        var body = document.body;
        modalContainer.removeAttribute('class');
        modalContainer.classList.add("one");
        body.classList.add("modal-active");
    };

    return React.createElement(
        "div",
        { "class": "explore-body" },
        React.createElement(
            "div",
            { "class": "explore-row" },
            React.createElement(
                "div",
                { id: "website-development", "class": "explore-item", onClick: function onClick() {
                        return explore("website-development", "Website Development");
                    } },
                React.createElement("img", { src: "./assets/images/skills/reactjs.png", alt: "" }),
                React.createElement(
                    "p",
                    null,
                    "website development"
                )
            ),
            React.createElement(
                "div",
                { id: "app-development", "class": "explore-item", onClick: function onClick() {
                        return explore("app-development", "App Development");
                    } },
                React.createElement("img", { src: "./assets/images/skills/android.jpeg", alt: "" }),
                React.createElement(
                    "p",
                    null,
                    "app development"
                )
            ),
            React.createElement(
                "div",
                { "class": "explore-item" },
                React.createElement("img", { src: "./assets/images/skills/seo.jpeg", alt: "" }),
                React.createElement(
                    "p",
                    null,
                    "seo"
                )
            ),
            React.createElement(
                "div",
                { "class": "explore-item" },
                React.createElement("img", { src: "./assets/images/skills/adobe-xd.png", alt: "" }),
                React.createElement(
                    "p",
                    null,
                    "ui / ux"
                )
            )
        ),
        React.createElement(
            "div",
            { "class": "explore-row" },
            React.createElement(
                "div",
                { "class": "explore-item" },
                React.createElement("img", { src: "./assets/images/skills/visual-studio-code.png", alt: "" }),
                React.createElement(
                    "p",
                    null,
                    "product development and maintenance"
                )
            ),
            React.createElement(
                "div",
                { "class": "explore-item" },
                React.createElement("img", { src: "./assets/images/skills/sales.jpeg", alt: "" }),
                React.createElement(
                    "p",
                    null,
                    "sales and marketing"
                )
            ),
            React.createElement(
                "div",
                { "class": "explore-item" },
                React.createElement("img", { src: "./assets/images/skills/design.png", alt: "" }),
                React.createElement(
                    "p",
                    null,
                    "design"
                )
            ),
            React.createElement(
                "div",
                { "class": "explore-item" },
                React.createElement("img", { src: "./assets/images/skills/java.jpeg", alt: "" }),
                React.createElement(
                    "p",
                    null,
                    "programming languages"
                )
            )
        ),
        React.createElement(
            "div",
            { "class": "explore-row" },
            React.createElement(
                "div",
                { "class": "explore-item" },
                React.createElement("img", { src: "./assets/images/skills/sql.png", alt: "" }),
                React.createElement(
                    "p",
                    null,
                    "databases"
                )
            ),
            React.createElement(
                "div",
                { "class": "explore-item" },
                React.createElement("img", { src: "./assets/images/skills/docker.png", alt: "" }),
                React.createElement(
                    "p",
                    null,
                    "cloud"
                )
            ),
            React.createElement(
                "div",
                { "class": "explore-item" },
                React.createElement("img", { src: "./assets/images/skills/reactjs.png", alt: "" }),
                React.createElement(
                    "p",
                    null,
                    "frontend and scripting"
                )
            ),
            React.createElement(
                "div",
                { "class": "explore-item" },
                React.createElement("img", { src: "./assets/images/skills/python.png", alt: "" }),
                React.createElement(
                    "p",
                    null,
                    "backend"
                )
            )
        ),
        React.createElement(
            "div",
            { "class": "explore-row" },
            React.createElement(
                "div",
                { "class": "explore-item" },
                React.createElement("img", { src: "./assets/images/skills/git.png", alt: "" }),
                React.createElement(
                    "p",
                    null,
                    "devops tools and processes"
                )
            ),
            React.createElement(
                "div",
                { "class": "explore-item" },
                React.createElement("img", { src: "./assets/images/skills/jupyter.png", alt: "" }),
                React.createElement(
                    "p",
                    null,
                    "others"
                )
            )
        ),
        React.createElement(
            "div",
            { id: "modal-container" },
            React.createElement(
                "div",
                { "class": "modal-background" },
                React.createElement(
                    "div",
                    { id: "close-modal" },
                    React.createElement("i", { "class": "uil uil-times" })
                ),
                React.createElement(
                    "div",
                    { "class": "modal" },
                    React.createElement(SkillsCardWithoutCarousel, { name: name, technologies: technologies, projects: projects, blogs: blogs })
                )
            )
        )
    );
};

ReactDOM.render(React.createElement(ExploreContainer, null), document.getElementById('explore_container'));