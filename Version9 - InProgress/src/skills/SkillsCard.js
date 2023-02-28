import SkillCard from './SkillCard.js';

/**
 * Alternative version - Skill.js
 */
var SkillsCard = function SkillsCard(_ref) {
    var _ref$active = _ref.active,
        active = _ref$active === undefined ? "" : _ref$active,
        id = _ref.id,
        name = _ref.name,
        ariaLabelledBy = _ref.ariaLabelledBy,
        tabControl = _ref.tabControl,
        _ref$data = _ref.data,
        data = _ref$data === undefined ? { "technologies": [], "blogs": [], "projects": [] } : _ref$data;


    var technologies = data["technologies"];
    var blogs = data["blogs"];
    var projects = data["projects"];

    var createTechnologyCarouselItems = function createTechnologyCarouselItems() {
        var carouselRow = [];
        var numberOfThrees = technologies.length / 3;
        for (var i = 0; i < numberOfThrees; i++) {
            var carouselItems = [];
            for (var j = 0; j < 3; j++) {
                var boxNumber = j + 1;
                var boxName = "box" + boxNumber;
                if (technologies.length == 0) {
                    break;
                }
                var technology = technologies.shift();
                carouselItems.push(React.createElement(
                    "div",
                    { "class": "box " + boxName },
                    React.createElement(SkillCard, { data: technology })
                ));
            }
            if (i == 0) {
                carouselRow.push(React.createElement(
                    "div",
                    { "class": "carousel-item active" },
                    React.createElement(
                        "div",
                        { "class": "boxes" },
                        carouselItems
                    )
                ));
            } else {
                carouselRow.push(React.createElement(
                    "div",
                    { "class": "carousel-item" },
                    React.createElement(
                        "div",
                        { "class": "boxes" },
                        carouselItems
                    )
                ));
            }
        }
        return carouselRow;
    };

    var createBlogCarouselItems = function createBlogCarouselItems() {
        var carouselRow = [];
        var numberOfThrees = blogs.length / 3;
        for (var i = 0; i < numberOfThrees; i++) {
            var carouselItems = [];
            for (var j = 0; j < 3; j++) {
                var boxNumber = j + 1;
                var boxName = "box" + boxNumber;
                if (blogs.length == 0) {
                    break;
                }
                var blog = blogs.shift();
                carouselItems.push(React.createElement(
                    "div",
                    { "class": "box " + boxName },
                    React.createElement(SkillCard, { data: blog })
                ));
            }
            if (i == 0) {
                carouselRow.push(React.createElement(
                    "div",
                    { "class": "carousel-item active" },
                    React.createElement(
                        "div",
                        { "class": "boxes" },
                        carouselItems
                    )
                ));
            } else {
                carouselRow.push(React.createElement(
                    "div",
                    { "class": "carousel-item" },
                    React.createElement(
                        "div",
                        { "class": "boxes" },
                        carouselItems
                    )
                ));
            }
        }
        return carouselRow;
    };

    var createProjectCarouselItems = function createProjectCarouselItems() {
        var carouselRow = [];
        var numberOfThrees = projects.length / 3;
        for (var i = 0; i < numberOfThrees; i++) {
            var carouselItems = [];
            for (var j = 0; j < 3; j++) {
                var boxNumber = j + 1;
                var boxName = "box" + boxNumber;
                if (projects.length == 0) {
                    break;
                }
                var project = projects.shift();
                carouselItems.push(React.createElement(
                    "div",
                    { "class": "box " + boxName },
                    React.createElement(SkillCard, { data: project })
                ));
            }
            if (i == 0) {
                carouselRow.push(React.createElement(
                    "div",
                    { "class": "carousel-item active" },
                    React.createElement(
                        "div",
                        { "class": "boxes" },
                        carouselItems
                    )
                ));
            } else {
                carouselRow.push(React.createElement(
                    "div",
                    { "class": "carousel-item" },
                    React.createElement(
                        "div",
                        { "class": "boxes" },
                        carouselItems
                    )
                ));
            }
        }
        return carouselRow;
    };

    return React.createElement(
        "div",
        { "class": "tab-pane fade show " + active, id: id, role: "tabpanel", "aria-labelledby": ariaLabelledBy },
        React.createElement(
            "div",
            { "class": "row align-items-center" },
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
            ),
            technologies.length > 3 && React.createElement(
                "div",
                { "class": "col-3 ms-auto d-flex justify-content-end h-100 gap-2" },
                React.createElement(
                    "a",
                    { "class": "btn btn-primary mb-3", href: "#" + tabControl + "skillsTechnologiesCarousel",
                        role: "button", "data-bs-slide": "prev" },
                    React.createElement("i", { "class": "fa fa-arrow-left" })
                ),
                React.createElement(
                    "a",
                    { "class": "btn btn-primary mb-3", href: "#" + tabControl + "skillsTechnologiesCarousel",
                        role: "button", "data-bs-slide": "next" },
                    React.createElement("i", { "class": "fa fa-arrow-right" })
                )
            )
        ),
        React.createElement(
            "div",
            { id: tabControl + "skillsTechnologiesCarousel", "class": "carousel slide", "data-bs-ride": "carousel" },
            React.createElement(
                "div",
                { "class": "carousel-inner" },
                createTechnologyCarouselItems()
            )
        ),
        React.createElement(
            "div",
            { "class": "row align-items-center" },
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
            ),
            blogs.length > 3 && React.createElement(
                "div",
                { "class": "col-3 ms-auto d-flex justify-content-end h-100 gap-2" },
                React.createElement(
                    "a",
                    { "class": "btn btn-primary mb-3", href: "#" + tabControl + "skillsBlogsCarousel",
                        role: "button", "data-bs-slide": "prev" },
                    React.createElement("i", { "class": "fa fa-arrow-left" })
                ),
                React.createElement(
                    "a",
                    { "class": "btn btn-primary mb-3", href: "#" + tabControl + "skillsBlogsCarousel",
                        role: "button", "data-bs-slide": "next" },
                    React.createElement("i", { "class": "fa fa-arrow-right" })
                )
            )
        ),
        React.createElement(
            "div",
            { id: tabControl + "skillsBlogsCarousel", "class": "carousel slide", "data-bs-ride": "carousel" },
            React.createElement(
                "div",
                { "class": "carousel-inner" },
                createBlogCarouselItems()
            )
        ),
        React.createElement(
            "div",
            { "class": "row align-items-center" },
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
            ),
            projects.length > 3 && React.createElement(
                "div",
                { "class": "col-3 ms-auto d-flex justify-content-end h-100 gap-2" },
                React.createElement(
                    "a",
                    { "class": "btn btn-primary mb-3", href: "#" + tabControl + "skillsProjectsCarousel",
                        role: "button", "data-bs-slide": "prev" },
                    React.createElement("i", { "class": "fa fa-arrow-left" })
                ),
                React.createElement(
                    "a",
                    { "class": "btn btn-primary mb-3", href: "#" + tabControl + "skillsProjectsCarousel",
                        role: "button", "data-bs-slide": "next" },
                    React.createElement("i", { "class": "fa fa-arrow-right" })
                )
            )
        ),
        React.createElement(
            "div",
            { id: tabControl + "skillsProjectsCarousel", "class": "carousel slide", "data-bs-ride": "carousel" },
            React.createElement(
                "div",
                { "class": "carousel-inner" },
                createProjectCarouselItems()
            )
        )
    );
};

export default SkillsCard;