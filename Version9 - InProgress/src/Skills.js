import Skill from "./skills/Skill.js";

var Skills = function Skills() {
    return React.createElement(
        "div",
        { "class": "tab-content", id: "skillsTabContent" },
        React.createElement(Skill, { active: "active", id: "app-development", ariaLabelledBy: "app-development-tab" }),
        React.createElement(Skill, { id: "website-development", ariaLabelledBy: "website-development-tab" }),
        React.createElement(Skill, { id: "cloud-development", ariaLabelledBy: "cloud-development-tab" }),
        React.createElement(Skill, { id: "desktop-development", ariaLabelledBy: "desktop-development-tab" }),
        React.createElement(Skill, { id: "seo", ariaLabelledBy: "seo-tab" }),
        React.createElement(Skill, { id: "ui-and-ux", ariaLabelledBy: "ui-and-ux-tab" }),
        React.createElement(Skill, { id: "backend-development", ariaLabelledBy: "backend-development-tab" }),
        React.createElement(Skill, { id: "frontend-development", ariaLabelledBy: "frontend-development-tab" }),
        React.createElement(Skill, { id: "sales-and-marketing", ariaLabelledBy: "sales-and-marketing-tab" }),
        React.createElement(Skill, { id: "design", ariaLabelledBy: "design-tab" }),
        React.createElement(Skill, { id: "other-services", ariaLabelledBy: "other-services-tab" })
    );
};

ReactDOM.render(React.createElement(Skills, null), document.getElementById('skills_container'));