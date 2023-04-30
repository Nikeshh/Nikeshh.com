import SkillsCardWithoutCarousel from "../skills/SkillsCardWithoutCarousel.js";

const ExploreContainer = () => {

    const [tag, setTag] = React.useState("");
    const [name, setName] = React.useState("");

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
        setTag(tag);
        setName(name);

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
                <div id="app-development" class="explore-item" onClick={() => explore("app-development", "App Development")}>
                    <img src="./assets/images/skills/android.jpeg" alt="" />
                    <p>app development</p>
                </div>
                <div class="explore-item" onClick={() => explore("seo", "SEO")}>
                    <img src="./assets/images/skills/seo.jpeg" alt="" />
                    <p>seo</p>
                </div>
                <div class="explore-item" onClick={() => explore("ui-ux-product-development-and-maintenance", "UI/UX, Product Development and Maintenance")}>
                    <img src="./assets/images/skills/adobe-xd.png" alt="" />
                    <p>ui / ux</p>
                </div>
            </div>
            <div class="explore-row">
                <div class="explore-item" onClick={() => explore("ui-ux-product-development-and-maintenance", "Product Development and Maintenance")}>
                    <img src="./assets/images/skills/visual-studio-code.png" alt="" />
                    <p>product development and maintenance</p>
                </div>
                <div class="explore-item" onClick={() => explore("sales-and-marketing", "Sales and Marketing")}>
                    <img src="./assets/images/skills/sales.jpeg" alt="" />
                    <p>sales and marketing</p>
                </div>
                <div class="explore-item" onClick={() => explore("design", "Design")}>
                    <img src="./assets/images/skills/design.png" alt="" />
                    <p>design</p>
                </div>
                <div class="explore-item" onClick={() => explore("programming-languages", "Programming Languages")}>
                    <img src="./assets/images/skills/java.jpeg" alt="" />
                    <p>programming languages</p>
                </div>
            </div>
            <div class="explore-row">
                <div class="explore-item" onClick={() => explore("databases", "Databases")}>
                    <img src="./assets/images/skills/sql.png" alt="" />
                    <p>databases</p>
                </div>
                <div class="explore-item" onClick={() => explore("cloud", "Cloud")}>
                    <img src="./assets/images/skills/docker.png" alt="" />
                    <p>cloud</p>
                </div>
                <div class="explore-item" onClick={() => explore("frontend-and-scripting", "Frontend and Scripting")}>
                    <img src="./assets/images/skills/reactjs.png" alt="" />
                    <p>frontend and scripting</p>
                </div>
                <div class="explore-item" onClick={() => explore("backend", "Backend")}>
                    <img src="./assets/images/skills/python.png" alt="" />
                    <p>backend</p>
                </div>
            </div>
            <div class="explore-row">
                <div class="explore-item" onClick={() => explore("devops-tools-processes", "Devops, Tools and Processes")}>
                    <img src="./assets/images/skills/git.png" alt="" />
                    <p>devops, tools and processes</p>
                </div>
                <div class="explore-item" onClick={() => explore("others", "Others")}>
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
                        <SkillsCardWithoutCarousel name={name} tag={tag} />
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<ExploreContainer />, document.getElementById('explore_container'));