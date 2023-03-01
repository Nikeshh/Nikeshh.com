import ProjectCard from './ProjectCard.js';

/**
 * Alternative version - Project.js
 */
const ProjectsCard = ({ projects=[] }) => {
    
    const projectRows = () => {
        var projectsRow = [];
        var id = 0;
        for(var i=0; i < projects.length; i++) {
            var projectItems = [];
            for(var j=0; j<3; j++) {
                const boxNumber = j+1;
                const boxName = "box" + boxNumber;
                if(projects.length == 0) {
                    break;
                }
                var project = projects.shift();
                projectItems.push(<div class={"box " + boxName}><ProjectCard id={id} title={project["title"]} description={project["description"]} /></div>);
                id = id + 1;
            }
            if(i == 0) {
                projectsRow.push(<div class="boxes">{ projectItems }</div>);
            } else {
                projectsRow.push(<div class="boxes">{ projectItems }</div>);
            }
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