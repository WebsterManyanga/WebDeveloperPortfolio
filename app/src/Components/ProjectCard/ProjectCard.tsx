import { ProjectType } from "../../types";
import { FaGithub, FaLink } from "react-icons/fa6";
import './ProjectCard.css';

const ProjectCard = ({project}: PropType) => {
  return (
    <div className="card">
        <h2>{project.title}</h2>
        <h3>{project.date}</h3>
        <img src={project.image} alt="preview site" />
        <p>{project.description}</p>
        <div className="card__buttons">
          <button><FaGithub /></button>
          <button><FaLink /></button>
        </div>
    </div>
  );
}


interface PropType {
  project: ProjectType
}
export default ProjectCard;