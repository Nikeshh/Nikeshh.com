import Technologies from "./Technologies.js";
import Blogs from "./Blogs.js";
import Projects from "./Projects.js";

var Skill = function Skill(_ref) {
    var _ref$active = _ref.active,
        active = _ref$active === undefined ? "" : _ref$active,
        id = _ref.id,
        ariaLabelledBy = _ref.ariaLabelledBy;

    return React.createElement(
        "div",
        { "class": "tab-pane fade show " + active, id: id, role: "tabpanel", "aria-labelledby": ariaLabelledBy },
        React.createElement(
            "h1",
            null,
            id
        ),
        React.createElement(Technologies, null),
        React.createElement(Blogs, null),
        React.createElement(Projects, null)
    );
};

export default Skill;