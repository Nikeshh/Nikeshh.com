import Technologies from "./Technologies.js";
import Blogs from "./Blogs.js";
import Projects from "./Projects.js";

/* tabControl is used since unique id is needed for the slider to control the slides */
var Skill = function Skill(_ref) {
    var _ref$active = _ref.active,
        active = _ref$active === undefined ? "" : _ref$active,
        id = _ref.id,
        ariaLabelledBy = _ref.ariaLabelledBy,
        tabControl = _ref.tabControl;

    return React.createElement(
        "div",
        { "class": "tab-pane fade show " + active, id: id, role: "tabpanel", "aria-labelledby": ariaLabelledBy },
        React.createElement(Technologies, { tabControl: tabControl }),
        React.createElement(Blogs, { tabControl: tabControl }),
        React.createElement(Projects, { tabControl: tabControl })
    );
};

export default Skill;