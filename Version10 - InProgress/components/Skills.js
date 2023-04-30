import Skill from "./skills/Skill.js";
import { skillsAndServices } from './data/data.js';

const Skills = () => {
    return (
        <div class="tab-content" id="skillsTabContent">
            <Skill active="active" id="website-development" ariaLabelledBy="website-development-tab" tabControl="websiteDevelopmentTab" data={skillsAndServices["website-development"]} />
            <Skill id="app-development" ariaLabelledBy="app-development-tab" tabControl="appDevelopmentTab" data={skillsAndServices["app-development"]} />
            <Skill id="seo" ariaLabelledBy="seo-tab" tabControl="seoTab" data={skillsAndServices["seo"]} />
            <Skill id="ui-ux-product-development-and-maintenance" ariaLabelledBy="ui-ux-product-development-and-maintenance-tab" tabControl="uiUXProductDevelopmentAndMaintenanceTab" data={skillsAndServices["ui-ux-product-development-and-maintenance"]} />
            <Skill id="sales-and-marketing" ariaLabelledBy="sales-and-marketing-tab" tabControl="websiteDevelopmentTab" data={skillsAndServices["sales-and-marketing"]} />
            <Skill id="design" ariaLabelledBy="design-tab" tabControl="designTab" data={skillsAndServices["design"]} />
            <Skill id="programming-languages" ariaLabelledBy="programming-languages-tab" tabControl="programmingLanguagesTab" data={skillsAndServices["programming-languages"]} />
            <Skill id="databases" ariaLabelledBy="databases-tab" tabControl="databasesTab" data={skillsAndServices["databases"]} />
            <Skill id="cloud" ariaLabelledBy="cloud-tab" tabControl="cloudTab" data={skillsAndServices["cloud"]} />
            <Skill id="frontend-and-scripting" ariaLabelledBy="frontend-and-scripting-tab" tabControl="frontendAndScriptingTab" data={skillsAndServices["frontend-and-scripting"]} />
            <Skill id="backend" ariaLabelledBy="backend-tab" tabControl="backendTab" data={skillsAndServices["backend"]} />
            <Skill id="devops-tools-processes" ariaLabelledBy="devops-tools-processes-tab" tabControl="devopsToolsProcessesTab" data={skillsAndServices["devops-tools-processes"]} />
            <Skill id="other-skills-services" ariaLabelledBy="other-skills-services-tab" tabControl="otherSkillsServicesTab" data={skillsAndServices["other-skills-services"]} />
        </div>
    );
}

ReactDOM.render(
    <Skills />,
    document.getElementById('skills_container')
);