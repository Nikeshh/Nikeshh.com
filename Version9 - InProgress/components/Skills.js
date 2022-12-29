import Skill from "./skills/Skill.js";

const Skills = () => {
    return (
        <div class="tab-content" id="skillsTabContent">
            <Skill active="active" id="app-development" ariaLabelledBy="app-development-tab" tabControl="appDevelopmentTab" />
            <Skill id="website-development" ariaLabelledBy="website-development-tab" tabControl="websiteDevelopmentTab" />
            <Skill id="cloud-development" ariaLabelledBy="cloud-development-tab" tabControl="cloudDevelopmentTab" />
            <Skill id="desktop-development" ariaLabelledBy="desktop-development-tab" tabControl="desktopDevelopmentTab" />
            <Skill id="seo" ariaLabelledBy="seo-tab" tabControl="seoTab" />
            <Skill id="ui-and-ux" ariaLabelledBy="ui-and-ux-tab" tabControl="uiAndUXTab" />
            <Skill id="backend-development" ariaLabelledBy="backend-development-tab" tabControl="backendDevelopmentTab" />
            <Skill id="frontend-development" ariaLabelledBy="frontend-development-tab" tabControl="frontendDevelopmentTab" />
            <Skill id="sales-and-marketing" ariaLabelledBy="sales-and-marketing-tab" tabControl="salesAndMarketingTab" />
            <Skill id="design" ariaLabelledBy="design-tab" tabControl="designTab" />
            <Skill id="other-services" ariaLabelledBy="other-services-tab" tabControl="otherServicesTab" />
        </div>
    );
}

ReactDOM.render(
    <Skills />,
    document.getElementById('skills_container')
);