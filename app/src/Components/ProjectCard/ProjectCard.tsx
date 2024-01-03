import { ProjectType } from "../../Types/types";
import { FaGithub, FaLink } from "react-icons/fa6";
import './ProjectCard.css';

const ProjectCard = ({ project }: PropType) => {

  return (
    <div className="card">
      <img src={project.image} alt="preview site" />
      <div className="card__info">
        <h2>{project.title}</h2>
        <h3>{project.date}</h3>
        <p>{project.description}</p>
        <div className="card__buttons">
          <button><FaGithub /></button>
          <button><FaLink /></button>
        </div>
      </div>
    </div>
  );
}


interface PropType {
  project: ProjectType
}
export default ProjectCard;