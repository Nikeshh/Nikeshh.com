import Technologies from "./Technologies.js";
import Blogs from "./Blogs.js";
import Projects from "./Projects.js";

var Skill = function Skill() {
    return React.createElement(
        "div",
        { "class": "tab-pane fade show active", id: "app-development", role: "tabpanel", "aria-labelledby": "app-development-tab" },
        React.createElement(Technologies, null),
        React.createElement(Blogs, null),
        React.createElement(Projects, null)
    );
};

export default Skill;