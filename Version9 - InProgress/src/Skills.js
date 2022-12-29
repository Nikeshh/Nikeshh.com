import Skill from "./skills/Skill.js";

var Skills = function Skills() {
    return React.createElement(
        "div",
        { "class": "tab-content", id: "skillsTabContent" },
        React.createElement(Skill, { active: "active", id: "app-development", ariaLabelledBy: "app-development-tab", tabControl: "appDevelopmentTab" }),
        React.createElement(Skill, { id: "website-development", ariaLabelledBy: "website-development-tab", tabControl: "websiteDevelopmentTab" }),
        React.createElement(Skill, { id: "cloud-development", ariaLabelledBy: "cloud-development-tab", tabControl: "cloudDevelopmentTab" }),
        React.createElement(Skill, { id: "desktop-development", ariaLabelledBy: "desktop-development-tab", tabControl: "desktopDevelopmentTab" }),
        React.createElement(Skill, { id: "seo", ariaLabelledBy: "seo-tab", tabControl: "seoTab" }),
        React.createElement(Skill, { id: "ui-and-ux", ariaLabelledBy: "ui-and-ux-tab", tabControl: "uiAndUXTab" }),
        React.createElement(Skill, { id: "backend-development", ariaLabelledBy: "backend-development-tab", tabControl: "backendDevelopmentTab" }),
        React.createElement(Skill, { id: "frontend-development", ariaLabelledBy: "frontend-development-tab", tabControl: "frontendDevelopmentTab" }),
        React.createElement(Skill, { id: "sales-and-marketing", ariaLabelledBy: "sales-and-marketing-tab", tabControl: "salesAndMarketingTab" }),
        React.createElement(Skill, { id: "design", ariaLabelledBy: "design-tab", tabControl: "designTab" }),
        React.createElement(Skill, { id: "other-services", ariaLabelledBy: "other-services-tab", tabControl: "otherServicesTab" })
    );
};

ReactDOM.render(React.createElement(Skills, null), document.getElementById('skills_container'));