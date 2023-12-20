import { projectsLibrary } from "../../projectsLibrary";
import ProjectCard from "../ProjectCard/ProjectCard";
import './AllProjectsCards.css';


const AllProjectsCards = ({category} : PropType) => {
  const projects = projectsLibrary.map(project => {
    if (project.category === category) {
      return <ProjectCard project={project} />
    }
  });
   
  return (
    <div className="all-projects">
      {projects[0] ? projects : <h1>Nothing to see here...👀</h1>}
    </div>
  );
}

interface PropType {
  category: string
}

export default AllProjectsCards;