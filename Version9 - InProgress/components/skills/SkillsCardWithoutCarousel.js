import SkillCard from './SkillCard.js';

/**
 * Alternative version - Skill.js
 * Alternative version - SkillsCard.js
 */
const SkillsCardWithoutCarousel = ({ name, technologies, blogs, projects }) => {

    React.useEffect(() => {
        createTechnologyItems();
    }, [technologies]);

    React.useEffect(() => {
        createBlogItems();
    }, [blogs]);

    React.useEffect(() => {
        createProjectItems();
    }, [projects]);

    const [technologyRows, setTechnologyRows] = React.useState([]);
    const [blogRows, setBlogRows] = React.useState([]);
    const [projectRows, setProjectRows] = React.useState([]);

    const createTechnologyItems = () => {
        var rows = [];
        var id = 0;
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
                rowItems.push(<div class={"box " + boxName}><SkillCard data={ technology } name={ name } category={ id } subcategory="technologies" /></div>);
                id = id + 1;
            }
            rows.push(<div class="boxes">{ rowItems }</div>);
        }
        setTechnologyRows(rows);
    }

    const createBlogItems = () => {
        var rows = [];
        var id = 0;
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
                rowItems.push(<div class={"box " + boxName}><SkillCard data={ blog } name={ name } category={ id } subcategory="blogs" /></div>);
                id = id + 1;
            }
            rows.push(<div class="boxes">{ rowItems }</div>);
        }
        setBlogRows(rows);
    }

    const createProjectItems = () => {
        var rows = [];
        var id = 0;
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
                rowItems.push(<div class={"box " + boxName}><SkillCard data={ project } name={ name } category={ id } subcategory="projects" /></div>);
                id = id + 1;
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