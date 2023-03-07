var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import SkillCard from './SkillCard.js';

/**
 * Alternative version - Skill.js
 * Alternative version - SkillsCard.js
 */
var SkillsCardWithoutCarousel = function SkillsCardWithoutCarousel(_ref) {
    var name = _ref.name,
        technologies = _ref.technologies,
        blogs = _ref.blogs,
        projects = _ref.projects;


    React.useEffect(function () {
        createTechnologyItems();
    }, [technologies]);

    React.useEffect(function () {
        createBlogItems();
    }, [blogs]);

    React.useEffect(function () {
        createProjectItems();
    }, [projects]);

    var _React$useState = React.useState([]),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        technologyRows = _React$useState2[0],
        setTechnologyRows = _React$useState2[1];

    var _React$useState3 = React.useState([]),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        blogRows = _React$useState4[0],
        setBlogRows = _React$useState4[1];

    var _React$useState5 = React.useState([]),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        projectRows = _React$useState6[0],
        setProjectRows = _React$useState6[1];

    var createTechnologyItems = function createTechnologyItems() {
        var rows = [];
        var id = 0;
        var technologiesData = technologies.slice();
        var numberOfThrees = technologiesData.length / 3;
        for (var i = 0; i < numberOfThrees; i++) {
            var rowItems = [];
            for (var j = 0; j < 3; j++) {
                var boxNumber = j + 1;
                var boxName = "box" + boxNumber;
                if (technologiesData.length == 0) {
                    break;
                }
                var technology = technologiesData.shift();
                rowItems.push(React.createElement(
                    "div",
                    { "class": "box " + boxName },
                    React.createElement(SkillCard, { data: technology, name: name, category: id, subcategory: "technologies" })
                ));
                id = id + 1;
            }
            rows.push(React.createElement(
                "div",
                { "class": "boxes" },
                rowItems
            ));
        }
        setTechnologyRows(rows);
    };

    var createBlogItems = function createBlogItems() {
        var rows = [];
        var id = 0;
        var blogsData = blogs.slice();
        var numberOfThrees = blogsData.length / 3;
        for (var i = 0; i < numberOfThrees; i++) {
            var rowItems = [];
            for (var j = 0; j < 3; j++) {
                var boxNumber = j + 1;
                var boxName = "box" + boxNumber;
                if (blogsData.length == 0) {
                    break;
                }
                var blog = blogsData.shift();
                rowItems.push(React.createElement(
                    "div",
                    { "class": "box " + boxName },
                    React.createElement(SkillCard, { data: blog, name: name, category: id, subcategory: "blogs" })
                ));
                id = id + 1;
            }
            rows.push(React.createElement(
                "div",
                { "class": "boxes" },
                rowItems
            ));
        }
        setBlogRows(rows);
    };

    var createProjectItems = function createProjectItems() {
        var rows = [];
        var id = 0;
        var projectsData = projects.slice();
        var numberOfThrees = projectsData.length / 3;
        for (var i = 0; i < numberOfThrees; i++) {
            var rowItems = [];
            for (var j = 0; j < 3; j++) {
                var boxNumber = j + 1;
                var boxName = "box" + boxNumber;
                if (projectsData.length == 0) {
                    break;
                }
                var project = projectsData.shift();
                rowItems.push(React.createElement(
                    "div",
                    { "class": "box " + boxName },
                    React.createElement(SkillCard, { data: project, name: name, category: id, subcategory: "projects" })
                ));
                id = id + 1;
            }
            rows.push(React.createElement(
                "div",
                { "class": "boxes" },
                rowItems
            ));
        }
        setProjectRows(rows);
    };

    return React.createElement(
        "div",
        { "class": "dash-content" },
        React.createElement(
            "div",
            { "class": "row" },
            React.createElement(
                "div",
                { "class": "col-9" },
                React.createElement(
                    "div",
                    { "class": "title ms-0 mt-0 me-0 mb-3" },
                    React.createElement(
                        "span",
                        { "class": "text" },
                        name,
                        " - Technologies"
                    )
                )
            )
        ),
        React.createElement(
            "div",
            null,
            technologyRows
        ),
        React.createElement(
            "div",
            { "class": "row" },
            React.createElement(
                "div",
                { "class": "col-9" },
                React.createElement(
                    "div",
                    { "class": "title ms-0 mt-0 me-0 mb-3" },
                    React.createElement(
                        "span",
                        { "class": "text" },
                        name,
                        " - Related Blogs"
                    )
                )
            )
        ),
        React.createElement(
            "div",
            null,
            blogRows
        ),
        React.createElement(
            "div",
            { "class": "row" },
            React.createElement(
                "div",
                { "class": "col-9" },
                React.createElement(
                    "div",
                    { "class": "title ms-0 mt-0 me-0 mb-3" },
                    React.createElement(
                        "span",
                        { "class": "text" },
                        name,
                        " - Related Projects"
                    )
                )
            )
        ),
        React.createElement(
            "div",
            null,
            projectRows
        )
    );
};

export default SkillsCardWithoutCarousel;