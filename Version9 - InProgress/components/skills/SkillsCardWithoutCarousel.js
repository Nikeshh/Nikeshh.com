import SkillCard from './SkillCard.js';

/**
 * Alternative version - Skill.js
 * Alternative version - SkillsCard.js
 */
const SkillsCardWithoutCarousel = ({ name, data={ "technologies": [], "blogs": [], "projects": [] } }) => {
    
    const technologies = data["technologies"];
    const blogs = data["blogs"];
    const projects = data["projects"];

    const createTechnologyItems = () => {
        var rows = [];
        var id = 0;
        for(var i=0; i < technologies.length; i++) {
            var rowItems = [];
            for(var j=0; j<3; j++) {
                const boxNumber = j+1;
                const boxName = "box" + boxNumber;
                if(technologies.length == 0) {
                    break;
                }
                var technology = technologies.shift();
                rowItems.push(<div class={"box " + boxName}><SkillCard data={ technology } name={ name } category={ id } subcategory="technologies" /></div>);
                id = id + 1;
            }
            if(i == 0) {
                rows.push(<div class="boxes">{ rowItems }</div>);
            } else {
                rows.push(<div class="boxes">{ rowItems }</div>);
            }
        }
        return rows;
    }

    const createBlogItems = () => {
        var rows = [];
        var id = 0;
        for(var i=0; i < blogs.length; i++) {
            var rowItems = [];
            for(var j=0; j<3; j++) {
                const boxNumber = j+1;
                const boxName = "box" + boxNumber;
                if(blogs.length == 0) {
                    break;
                }
                var blog = blogs.shift();
                rowItems.push(<div class={"box " + boxName}><SkillCard data={ blog } name={ name } category={ id } subcategory="blogs" /></div>);
                id = id + 1;
            }
            if(i == 0) {
                rows.push(<div class="boxes">{ rowItems }</div>);
            } else {
                rows.push(<div class="boxes">{ rowItems }</div>);
            }
        }
        return rows;
    }

    const createProjectItems = () => {
        var rows = [];
        var id = 0;
        for(var i=0; i < projects.length; i++) {
            var rowItems = [];
            for(var j=0; j<3; j++) {
                const boxNumber = j+1;
                const boxName = "box" + boxNumber;
                if(projects.length == 0) {
                    break;
                }
                var project = projects.shift();
                rowItems.push(<div class={"box " + boxName}><SkillCard data={ project } name={ name } category={ id } subcategory="projects" /></div>);
                id = id + 1;
            }
            if(i == 0) {
                rows.push(<div class="boxes">{ rowItems }</div>);
            } else {
                rows.push(<div class="boxes">{ rowItems }</div>);
            }
        }
        return rows;
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
                { createTechnologyItems() }
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
                { createBlogItems() }
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
                { createProjectItems() }
            </div>
        </div>
    );
}

export default SkillsCardWithoutCarousel;