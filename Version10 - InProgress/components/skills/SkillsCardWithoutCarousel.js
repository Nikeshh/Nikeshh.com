import SkillCard from './SkillCard.js';
import { skillsAndServices } from '../data/data.js';

/**
 * Alternative version - Skill.js
 * Alternative version - SkillsCard.js
 */
const SkillsCardWithoutCarousel = ({ tag, name }) => {

    const [technologies, setTechnologies] = React.useState([]);
    const [blogs, setBlogs] = React.useState([]);
    const [projects, setProjects] = React.useState([]);
    const [technologyRows, setTechnologyRows] = React.useState([]);
    const [blogRows, setBlogRows] = React.useState([]);
    const [projectRows, setProjectRows] = React.useState([]);

    React.useEffect(() => {
        if(tag != "" && name != "") {
            const data = skillsAndServices[tag];
            setTechnologies(data["technologies"]);
            setBlogs(data["blogs"]);
            setProjects(data["projects"]);
        }
    }, [tag, name]);

    React.useEffect(() => {
        createTechnologyItems();
    }, [technologies]);

    React.useEffect(() => {
        createBlogItems();
    }, [blogs]);

    React.useEffect(() => {
        createProjectItems();
    }, [projects]);

    const createTechnologyItems = () => {
        var rows = [];
        const technologiesData = technologies.slice();
        const numberOfThrees = technologiesData.length / 3;
        for(var i=0; i < numberOfThrees; i++) {
            var rowItems = [];
            for(var j=0; j<3; j++) {
                const boxNumber = j+1;
                const boxName = "box" + boxNumber;
                if(technologiesData.length == 0) {
                    break;
                }
                var technology = technologiesData.shift();
                rowItems.push(<div class={"box " + boxName}><SkillCard data={ technology } name={ name } category={ tag } subcategory="technologies" /></div>);
            }
            rows.push(<div class="boxes">{ rowItems }</div>);
        }
        setTechnologyRows(rows);
    }

    const createBlogItems = () => {
        var rows = [];
        const blogsData = blogs.slice();
        const numberOfThrees = blogsData.length / 3;
        for(var i=0; i < numberOfThrees; i++) {
            var rowItems = [];
            for(var j=0; j<3; j++) {
                const boxNumber = j+1;
                const boxName = "box" + boxNumber;
                if(blogsData.length == 0) {
                    break;
                }
                var blog = blogsData.shift();
                rowItems.push(<div class={"box " + boxName}><SkillCard data={ blog } name={ name } category={ tag } subcategory="blogs" /></div>);
            }
            rows.push(<div class="boxes">{ rowItems }</div>);
        }
        setBlogRows(rows);
    }

    const createProjectItems = () => {
        var rows = [];
        const projectsData = projects.slice();
        const numberOfThrees = projectsData.length / 3;
        for(var i=0; i < numberOfThrees; i++) {
            var rowItems = [];
            for(var j=0; j<3; j++) {
                const boxNumber = j+1;
                const boxName = "box" + boxNumber;
                if(projectsData.length == 0) {
                    break;
                }
                var project = projectsData.shift();
                rowItems.push(<div class={"box " + boxName}><SkillCard data={ project } name={ name } category={ category } subcategory="projects" /></div>);
            }
            rows.push(<div class="boxes">{ rowItems }</div>);
        }
        setProjectRows(rows);
    }

    return (
        <div class="dash-content">
            {/* Technologies */}
            <div class="row">
                <div class="col-9">
                    <div class="title ms-0 mt-0 me-0 mb-3">
                        <span class="text">{ name } - Technologies</span>
                    </div>
                </div>
            </div>
            <div>
                { technologyRows }
            </div>
            {/* Blogs */}
            <div class="row">
                <div class="col-9">
                    <div class="title ms-0 mt-0 me-0 mb-3">
                        <span class="text">{ name } - Related Blogs</span>
                    </div>
                </div>
            </div>
            <div>
                { blogRows }
            </div>
            {/* Projects */}
            <div class="row">
                <div class="col-9">
                    <div class="title ms-0 mt-0 me-0 mb-3">
                        <span class="text">{ name } - Related Projects</span>
                    </div>
                </div>
            </div>
            <div>
                { projectRows }
            </div>
        </div>
    );
}

export default SkillsCardWithoutCarousel;