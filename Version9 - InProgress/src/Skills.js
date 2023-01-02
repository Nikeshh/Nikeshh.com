import Skill from "./skills/Skill.js";
import { skillsAndServices } from './data/data.js';

var Skills = function Skills() {
    return React.createElement(
        "div",
        { "class": "tab-content", id: "skillsTabContent" },
        React.createElement(Skill, { active: "active", id: "website-development", ariaLabelledBy: "website-development-tab", tabControl: "websiteDevelopmentTab", data: skillsAndServices["website-development"] }),
        React.createElement(Skill, { id: "app-development", ariaLabelledBy: "app-development-tab", tabControl: "appDevelopmentTab", data: skillsAndServices["app-development"] }),
        React.createElement(Skill, { id: "seo", ariaLabelledBy: "seo-tab", tabControl: "seoTab", data: skillsAndServices["seo"] }),
        React.createElement(Skill, { id: "ui-ux-product-development-and-maintenance", ariaLabelledBy: "ui-ux-product-development-and-maintenance-tab", tabControl: "uiUXProductDevelopmentAndMaintenanceTab", data: skillsAndServices["ui-ux-product-development-and-maintenance"] }),
        React.createElement(Skill, { id: "sales-and-marketing", ariaLabelledBy: "sales-and-marketing-tab", tabControl: "websiteDevelopmentTab", data: skillsAndServices["sales-and-marketing"] }),
        React.createElement(Skill, { id: "design", ariaLabelledBy: "design-tab", tabControl: "designTab", data: skillsAndServices["design"] }),
        React.createElement(Skill, { id: "programming-languages", ariaLabelledBy: "programming-languages-tab", tabControl: "programmingLanguagesTab", data: skillsAndServices["programming-languages"] }),
        React.createElement(Skill, { id: "databases", ariaLabelledBy: "databases-tab", tabControl: "databasesTab", data: skillsAndServices["databases"] }),
        React.createElement(Skill, { id: "cloud", ariaLabelledBy: "cloud-tab", tabControl: "cloudTab", data: skillsAndServices["cloud"] }),
        React.createElement(Skill, { id: "frontend-and-scripting", ariaLabelledBy: "frontend-and-scripting-tab", tabControl: "frontendAndScriptingTab", data: skillsAndServices["frontend-and-scripting"] }),
        React.createElement(Skill, { id: "backend", ariaLabelledBy: "backend-tab", tabControl: "backendTab", data: skillsAndServices["backend"] }),
        React.createElement(Skill, { id: "devops-tools-processes", ariaLabelledBy: "devops-tools-processes-tab", tabControl: "devopsToolsProcessesTab", data: skillsAndServices["devops-tools-processes"] }),
        React.createElement(Skill, { id: "other-skills-services", ariaLabelledBy: "other-skills-services-tab", tabControl: "otherSkillsServicesTab", data: skillsAndServices["other-skills-services"] })
    );
};

ReactDOM.render(React.createElement(Skills, null), document.getElementById('skills_container'));