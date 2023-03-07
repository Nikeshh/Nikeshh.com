import SkillsCardWithoutCarousel from "../skills/SkillsCardWithoutCarousel.js";
import { skillsAndServices } from '../data/data.js';

const ExploreContainer = () => {

    const [name, setName] = React.useState("");
    const [technologies, setTechnologies] = React.useState([]);
    const [blogs, setBlogs] = React.useState([]);
    const [projects, setProjects] = React.useState([]);

    React.useEffect(() => {
        var modalContainer = document.getElementById("modal-container");
        var closeModal = document.getElementById("close-modal");
        var body = document.body;
        closeModal.addEventListener('click', function() {
            modalContainer.classList.add("out");
            body.classList.remove("modal-active");
        }, false);
    }, []);

    const explore = (tag, name) => {
        setName(name);
        const data = skillsAndServices[tag];
        setTechnologies(data["technologies"]);
        setBlogs(data["blogs"]);
        setProjects(data["projects"]);

        var modalContainer = document.getElementById("modal-container");
        var body = document.body;
        modalContainer.removeAttribute('class');
        modalContainer.classList.add("one");
        body.classList.add("modal-active");
    }

    return(
        <div class="explore-body">
            <div class="explore-row">
                <div id="website-development" class="explore-item" onClick={() => explore("website-development", "Website Development")}>
                    <img src="./assets/images/skills/reactjs.png" alt="" />
                    <p>website development</p>
                </div>
                <div id="app-development" class="explore-item"  onClick={() => explore("app-development", "App Development")}>
                    <img src="./assets/images/skills/android.jpeg" alt="" />
                    <p>app development</p>
                </div>
                <div class="explore-item">
                    <img src="./assets/images/skills/seo.jpeg" alt="" />
                    <p>seo</p>
                </div>
                <div class="explore-item">
                    <img src="./assets/images/skills/adobe-xd.png" alt="" />
                    <p>ui / ux</p>
                </div>
            </div>
            <div class="explore-row">
                <div class="explore-item">
                    <img src="./assets/images/skills/visual-studio-code.png" alt="" />
                    <p>product development and maintenance</p>
                </div>
                <div class="explore-item">
                    <img src="./assets/images/skills/sales.jpeg" alt="" />
                    <p>sales and marketing</p>
                </div>
                <div class="explore-item">
                    <img src="./assets/images/skills/design.png" alt="" />
                    <p>design</p>
                </div>
                <div class="explore-item">
                    <img src="./assets/images/skills/java.jpeg" alt="" />
                    <p>programming languages</p>
                </div>
            </div>
            <div class="explore-row">
                <div class="explore-item">
                    <img src="./assets/images/skills/sql.png" alt="" />
                    <p>databases</p>
                </div>
                <div class="explore-item">
                    <img src="./assets/images/skills/docker.png" alt="" />
                    <p>cloud</p>
                </div>
                <div class="explore-item">
                    <img src="./assets/images/skills/reactjs.png" alt="" />
                    <p>frontend and scripting</p>
                </div>
                <div class="explore-item">
                    <img src="./assets/images/skills/python.png" alt="" />
                    <p>backend</p>
                </div>
            </div>
            <div class="explore-row">
                <div class="explore-item">
                    <img src="./assets/images/skills/git.png" alt="" />
                    <p>devops tools and processes</p>
                </div>
                <div class="explore-item">
                    <img src="./assets/images/skills/jupyter.png" alt="" />
                    <p>others</p>
                </div>
            </div>
            <div id="modal-container">
                <div class="modal-background">
                    <div id="close-modal">
                        <i class="uil uil-times"></i>
                    </div>
                    <div class="modal">
                        <SkillsCardWithoutCarousel name={name} technologies={technologies} projects={projects} blogs={blogs} />
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<ExploreContainer />, document.getElementById('explore_container'));