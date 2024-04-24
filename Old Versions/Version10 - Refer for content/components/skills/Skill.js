import Technologies from "./Technologies.js";
import Blogs from "./Blogs.js";
import Projects from "./Projects.js";

/**
 * Alternative version - SkillsCard.js
 */
/* tabControl is used since unique id is needed for the slider to control the slides */
const Skill = ({ active="", id, ariaLabelledBy, tabControl, data={ "technologies": [], "blogs": [], "projects": [] } }) => {
    return (
        <div class={"tab-pane fade show " + active} id={id} role="tabpanel" aria-labelledby={ariaLabelledBy}>
            <Technologies tabControl={tabControl} data={ data["technologies"] } />
            <Blogs tabControl={tabControl} data={ data["blogs"] } />
            <Projects tabControl={tabControl} data={ data["projects"] } />         
        </div>
    );
}

export default Skill;