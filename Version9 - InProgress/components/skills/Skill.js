import Technologies from "./Technologies.js";
import Blogs from "./Blogs.js";
import Projects from "./Projects.js";

const Skill = () => {
    return (
        <div class="tab-pane fade show active" id="app-development" role="tabpanel" aria-labelledby="app-development-tab">
            <Technologies />
            <Blogs />
            <Projects />         
        </div>
    );
}

export default Skill;