import SkillCard from './SkillCard.js';

/**
 * Alternative version - Skill.js
 * Alternative version - SkillsCardWithoutCarousel.js
 */
const SkillsCard = ({ active="", id, name, ariaLabelledBy, tabControl, data={ "technologies": [], "blogs": [], "projects": [] } }) => {
    
    const technologies = data["technologies"];
    const blogs = data["blogs"];
    const projects = data["projects"];

    const createTechnologyCarouselItems = () => {
        var carouselRow = [];
        const technologiesData = technologies.slice();
        const numberOfThrees = technologiesData.length / 3;
        for(var i=0; i < numberOfThrees; i++) {
            var carouselItems = [];
            for(var j=0; j<3; j++) {
                const boxNumber = j+1;
                const boxName = "box" + boxNumber;
                if(technologiesData.length == 0) {
                    break;
                }
                var technology = technologiesData.shift();
                carouselItems.push(<div class={"box " + boxName}><SkillCard data={ technology } name={ name } category={ id } subcategory="technologies" /></div>);
            }
            if(i == 0) {
                carouselRow.push(<div class="carousel-item active"><div class="boxes">{ carouselItems }</div></div>);
            } else {
                carouselRow.push(<div class="carousel-item"><div class="boxes">{ carouselItems }</div></div>);
            }
        }
        return carouselRow;
    }

    const createBlogCarouselItems = () => {
        var carouselRow = [];
        const blogsData = blogs.slice();
        const numberOfThrees = blogsData.length / 3;
        for(var i=0; i < numberOfThrees; i++) {
            var carouselItems = [];
            for(var j=0; j<3; j++) {
                const boxNumber = j+1;
                const boxName = "box" + boxNumber;
                if(blogsData.length == 0) {
                    break;
                }
                var blog = blogsData.shift();
                carouselItems.push(<div class={"box " + boxName}><SkillCard data={ blog } name={ name } category={ id } subcategory="blogs" /></div>);
            }
            if(i == 0) {
                carouselRow.push(<div class="carousel-item active"><div class="boxes">{ carouselItems }</div></div>);
            } else {
                carouselRow.push(<div class="carousel-item"><div class="boxes">{ carouselItems }</div></div>);
            }
        }
        return carouselRow;
    }

    const createProjectCarouselItems = () => {
        var carouselRow = [];
        const projectsData = projects.slice();
        const numberOfThrees = projectsData.length / 3;
        for(var i=0; i < numberOfThrees; i++) {
            var carouselItems = [];
            for(var j=0; j<3; j++) {
                const boxNumber = j+1;
                const boxName = "box" + boxNumber;
                if(projectsData.length == 0) {
                    break;
                }
                var project = projectsData.shift();
                carouselItems.push(<div class={"box " + boxName}><SkillCard data={ project } name={ name } category={ id } subcategory="projects" /></div>);
            }
            if(i == 0) {
                carouselRow.push(<div class="carousel-item active"><div class="boxes">{ carouselItems }</div></div>);
            } else {
                carouselRow.push(<div class="carousel-item"><div class="boxes">{ carouselItems }</div></div>);
            }
        }
        return carouselRow;
    }

    return (
        <div class={"tab-pane fade show " + active} id={id} role="tabpanel" aria-labelledby={ariaLabelledBy}>
            {/* Technologies */}
            <div class="row align-items-center">
                <div class="col-9">
                    <div class="title ms-0 mt-0 me-0 mb-3">
                        <span class="text">{ name } - Technologies</span>
                    </div>
                </div>
                { technologies.length > 3 && 
                    <div class="col-3 ms-auto d-flex justify-content-end h-100 gap-2">
                        <a class="btn btn-primary mb-3" href={"#" + tabControl + "skillsTechnologiesCarousel"}
                            role="button" data-bs-slide="prev">
                            <i class="fa fa-arrow-left"></i>
                        </a>
                        <a class="btn btn-primary mb-3" href={"#" + tabControl + "skillsTechnologiesCarousel"}
                            role="button" data-bs-slide="next">
                            <i class="fa fa-arrow-right"></i>
                        </a>
                    </div>
                }
            </div>
            <div id={tabControl + "skillsTechnologiesCarousel"} class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    { createTechnologyCarouselItems() }
                </div>
            </div>
            {/* Blogs */}
            <div class="row align-items-center">
                <div class="col-9">
                    <div class="title ms-0 mt-0 me-0 mb-3">
                        <span class="text">{ name } - Related Blogs</span>
                    </div>
                </div>
                { blogs.length > 3 && 
                    <div class="col-3 ms-auto d-flex justify-content-end h-100 gap-2">
                        <a class="btn btn-primary mb-3" href={"#" + tabControl + "skillsBlogsCarousel"}
                            role="button" data-bs-slide="prev">
                            <i class="fa fa-arrow-left"></i>
                        </a>
                        <a class="btn btn-primary mb-3" href={"#" + tabControl + "skillsBlogsCarousel"}
                            role="button" data-bs-slide="next">
                            <i class="fa fa-arrow-right"></i>
                        </a>
                    </div>
                }
            </div>
            <div id={tabControl + "skillsBlogsCarousel"} class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    { createBlogCarouselItems() }
                </div>
            </div>
            {/* Projects */}
            <div class="row align-items-center">
                <div class="col-9">
                    <div class="title ms-0 mt-0 me-0 mb-3">
                        <span class="text">{ name } - Related Projects</span>
                    </div>
                </div>
                { projects.length > 3 && 
                    <div class="col-3 ms-auto d-flex justify-content-end h-100 gap-2">
                        <a class="btn btn-primary mb-3" href={"#" + tabControl + "skillsProjectsCarousel"}
                            role="button" data-bs-slide="prev">
                            <i class="fa fa-arrow-left"></i>
                        </a>
                        <a class="btn btn-primary mb-3" href={"#" + tabControl + "skillsProjectsCarousel"}
                            role="button" data-bs-slide="next">
                            <i class="fa fa-arrow-right"></i>
                        </a>
                    </div>
                }
            </div>
            <div id={tabControl + "skillsProjectsCarousel"} class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    { createProjectCarouselItems() }
                </div>
            </div>
        </div>
    );
}

export default SkillsCard;