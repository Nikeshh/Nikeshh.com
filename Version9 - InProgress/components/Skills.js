import Skill from "./skills/Skill.js";

const Skills = () => {
    return (
        <div class="tab-content" id="skillsTabContent">
            <Skill active="active" id="app-development" ariaLabelledBy="app-development-tab" />
            <Skill id="website-development" ariaLabelledBy="website-development-tab" />
            <Skill id="cloud-development" ariaLabelledBy="cloud-development-tab" />
            <Skill id="desktop-development" ariaLabelledBy="desktop-development-tab" />
            <Skill id="seo" ariaLabelledBy="seo-tab" />
            <Skill id="ui-and-ux" ariaLabelledBy="ui-and-ux-tab" />
            <Skill id="backend-development" ariaLabelledBy="backend-development-tab" />
            <Skill id="frontend-development" ariaLabelledBy="frontend-development-tab" />
            <Skill id="sales-and-marketing" ariaLabelledBy="sales-and-marketing-tab" />
            <Skill id="design" ariaLabelledBy="design-tab" />
            <Skill id="other-services" ariaLabelledBy="other-services-tab" />
        </div>
    );
}

ReactDOM.render(
    <Skills />,
    document.getElementById('skills_container')
);