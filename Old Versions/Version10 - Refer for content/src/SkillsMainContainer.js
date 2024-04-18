import SkillsCard from "./skills/SkillsCard.js";
import { skillsAndServices } from './data/data.js';

var SkillsMainContainer = function SkillsMainContainer() {
    return React.createElement(
        "div",
        { "class": "tab-content", id: "skillsTabContent" },
        React.createElement(SkillsCard, { active: "active", id: "website-development", name: "Website Development", ariaLabelledBy: "website-development-tab", tabControl: "websiteDevelopmentTab", data: skillsAndServices["website-development"] }),
        React.createElement(SkillsCard, { id: "app-development", name: "App Development", ariaLabelledBy: "app-development-tab", tabControl: "appDevelopmentTab", data: skillsAndServices["app-development"] }),
        React.createElement(SkillsCard, { id: "seo", name: "SEO", ariaLabelledBy: "seo-tab", tabControl: "seoTab", data: skillsAndServices["seo"] }),
        React.createElement(SkillsCard, { id: "ui-ux-product-development-and-maintenance", name: "UI / UX, Product Development and Maintenance", ariaLabelledBy: "ui-ux-product-development-and-maintenance-tab", tabControl: "uiUXProductDevelopmentAndMaintenanceTab", data: skillsAndServices["ui-ux-product-development-and-maintenance"] }),
        React.createElement(SkillsCard, { id: "sales-and-marketing", name: "Sales and Marketing", ariaLabelledBy: "sales-and-marketing-tab", tabControl: "websiteDevelopmentTab", data: skillsAndServices["sales-and-marketing"] }),
        React.createElement(SkillsCard, { id: "design", name: "Design", ariaLabelledBy: "design-tab", tabControl: "designTab", data: skillsAndServices["design"] }),
        React.createElement(SkillsCard, { id: "programming-languages", name: "Programming Languages", ariaLabelledBy: "programming-languages-tab", tabControl: "programmingLanguagesTab", data: skillsAndServices["programming-languages"] }),
        React.createElement(SkillsCard, { id: "databases", name: "Databases", ariaLabelledBy: "databases-tab", tabControl: "databasesTab", data: skillsAndServices["databases"] }),
        React.createElement(SkillsCard, { id: "cloud", name: "Cloud", ariaLabelledBy: "cloud-tab", tabControl: "cloudTab", data: skillsAndServices["cloud"] }),
        React.createElement(SkillsCard, { id: "frontend-and-scripting", name: "Frontend and Scripting", ariaLabelledBy: "frontend-and-scripting-tab", tabControl: "frontendAndScriptingTab", data: skillsAndServices["frontend-and-scripting"] }),
        React.createElement(SkillsCard, { id: "backend", name: "Backend", ariaLabelledBy: "backend-tab", tabControl: "backendTab", data: skillsAndServices["backend"] }),
        React.createElement(SkillsCard, { id: "devops-tools-processes", name: "Devops, Tools and Processes", ariaLabelledBy: "devops-tools-processes-tab", tabControl: "devopsToolsProcessesTab", data: skillsAndServices["devops-tools-processes"] }),
        React.createElement(SkillsCard, { id: "other-skills-services", name: "Website Development", ariaLabelledBy: "other-skills-services-tab", tabControl: "otherSkillsServicesTab", data: skillsAndServices["other-skills-services"] })
    );
};

ReactDOM.render(React.createElement(SkillsMainContainer, null), document.getElementById('skills_main_container'));