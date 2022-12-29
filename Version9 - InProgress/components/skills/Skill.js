import Technologies from "./Technologies.js";
import Blogs from "./Blogs.js";
import Projects from "./Projects.js";

/* tabControl is used since unique id is needed for the slider to control the slides */
const Skill = ({ active="", id, ariaLabelledBy, tabControl }) => {
    return (
        <div class={"tab-pane fade show " + active} id={id} role="tabpanel" aria-labelledby={ariaLabelledBy}>
            <Technologies tabControl={tabControl} />
            <Blogs tabControl={tabControl} />
            <Projects tabControl={tabControl} />         
        </div>
    );
}

export default Skill;