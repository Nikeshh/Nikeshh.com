import Skill from "./skills/Skill.js";

const Skills = () => {
    return (
        <div class="tab-content" id="skillsTabContent">
            <Skill />
        </div>
    );
}

ReactDOM.render(
    <Skills />,
    document.getElementById('skills_container')
);