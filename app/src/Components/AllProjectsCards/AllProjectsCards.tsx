import { projectsLibrary } from "../../projectsLibrary";
import ProjectCard from "../ProjectCard/ProjectCard";
import './AllProjectsCards.css';


const AllProjectsCards = ({category} : PropType) => {
  const projects = projectsLibrary.map(project => {
    if (project.category === category) {
      return <li key={project.id}><ProjectCard project={project} /></li>
    }
  });

  const filteredProjects = projects.filter(project => project ? true : false);
   
  return (
    <div className="all-projects">
      {filteredProjects[0] ? filteredProjects : <h1>Nothing to see here...👀</h1>}
    </div>
  );
}

interface PropType {
  category: string
}

export default AllProjectsCards;