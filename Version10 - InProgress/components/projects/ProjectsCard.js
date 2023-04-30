import ProjectCard from './ProjectCard.js';

/**
 * Alternative version - Project.js
 */
const ProjectsCard = ({ projects=[] }) => {
    
    const projectRows = () => {
        var projectsRow = [];
        var id = 0;
        const projectsData = projects.slice();
        const numberOfThrees = projectsData.length / 3;
        for(var i=0; i < numberOfThrees; i++) {
            var projectItems = [];
            for(var j=0; j<3; j++) {
                const boxNumber = j+1;
                const boxName = "box" + boxNumber;
                if(projectsData.length == 0) {
                    break;
                }
                var project = projectsData.shift();
                projectItems.push(<div class={"box " + boxName}><ProjectCard id={id} title={project["title"]} description={project["description"]} /></div>);
                id = id + 1;
            }
            projectsRow.push(<div class="boxes">{ projectItems }</div>);
        }
        return projectsRow;
    }

    return (
        <div>
            { projectRows() }
        </div>
    );
}

export default ProjectsCard;