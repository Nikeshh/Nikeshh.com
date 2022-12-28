import Technologies from "./Technologies.js";
import Blogs from "./Blogs.js";
import Projects from "./Projects.js";

const Skill = ({ active="", id, ariaLabelledBy }) => {
    return (
        <div class={"tab-pane fade show " + active} id={id} role="tabpanel" aria-labelledby={ariaLabelledBy}>
            <Technologies />
            <Blogs />
            <Projects />         
        </div>
    );
}

export default Skill;