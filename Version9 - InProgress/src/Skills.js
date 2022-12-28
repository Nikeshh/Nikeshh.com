import Skill from "./skills/Skill.js";

var Skills = function Skills() {
    return React.createElement(
        "div",
        { "class": "tab-content", id: "skillsTabContent" },
        React.createElement(Skill, null)
    );
};

ReactDOM.render(React.createElement(Skills, null), document.getElementById('skills_container'));