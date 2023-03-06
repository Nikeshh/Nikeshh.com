import SkillCard from './SkillCard.js';

/**
 * Alternative version - Skill.js
 * Alternative version - SkillsCard.js
 */
var SkillsCardWithoutCarousel = function SkillsCardWithoutCarousel(_ref) {
    var name = _ref.name,
        _ref$data = _ref.data,
        data = _ref$data === undefined ? { "technologies": [], "blogs": [], "projects": [] } : _ref$data;


    var technologies = data["technologies"];
    var blogs = data["blogs"];
    var projects = data["projects"];

    var createTechnologyItems = function createTechnologyItems() {
        var rows = [];
        var id = 0;
        for (var i = 0; i < technologies.length; i++) {
            var rowItems = [];
            for (var j = 0; j < 3; j++) {
                var boxNumber = j + 1;
                var boxName = "box" + boxNumber;
                if (technologies.length == 0) {
                    break;
                }
                var technology = technologies.shift();
                rowItems.push(React.createElement(
                    "div",
                    { "class": "box " + boxName },
                    React.createElement(SkillCard, { data: technology, name: name, category: id, subcategory: "technologies" })
                ));
                id = id + 1;
            }
            if (i == 0) {
                rows.push(React.createElement(
                    "div",
                    { "class": "boxes" },
                    rowItems
                ));
            } else {
                rows.push(React.createElement(
                    "div",
                    { "class": "boxes" },
                    rowItems
                ));
            }
        }
        return rows;
    };

    var createBlogItems = function createBlogItems() {
        var rows = [];
        var id = 0;
        for (var i = 0; i < blogs.length; i++) {
            var rowItems = [];
            for (var j = 0; j < 3; j++) {
                var boxNumber = j + 1;
                var boxName = "box" + boxNumber;
                if (blogs.length == 0) {
                    break;
                }
                var blog = blogs.shift();
                rowItems.push(React.createElement(
                    "div",
                    { "class": "box " + boxName },
                    React.createElement(SkillCard, { data: blog, name: name, category: id, subcategory: "blogs" })
                ));
                id = id + 1;
            }
            if (i == 0) {
                rows.push(React.createElement(
                    "div",
                    { "class": "boxes" },
                    rowItems
                ));
            } else {
                rows.push(React.createElement(
                    "div",
                    { "class": "boxes" },
                    rowItems
                ));
            }
        }
        return rows;
    };

    var createProjectItems = function createProjectItems() {
        var rows = [];
        var id = 0;
        for (var i = 0; i < projects.length; i++) {
            var rowItems = [];
            for (var j = 0; j < 3; j++) {
                var boxNumber = j + 1;
                var boxName = "box" + boxNumber;
                if (projects.length == 0) {
                    break;
                }
                var project = projects.shift();
                rowItems.push(React.createElement(
                    "div",
                    { "class": "box " + boxName },
                    React.createElement(SkillCard, { data: project, name: name, category: id, subcategory: "projects" })
                ));
                id = id + 1;
            }
            if (i == 0) {
                rows.push(React.createElement(
                    "div",
                    { "class": "boxes" },
                    rowItems
                ));
            } else {
                rows.push(React.createElement(
                    "div",
                    { "class": "boxes" },
                    rowItems
                ));
            }
        }
        return rows;
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
            createTechnologyItems()
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
            createBlogItems()
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
            createProjectItems()
        )
    );
};

export default SkillsCardWithoutCarousel;