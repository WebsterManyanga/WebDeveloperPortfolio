import { useState } from "react";
import { projectsLibrary } from "../../projectsLibrary";
import ProjectCard from "../ProjectCard/ProjectCard";
import './MoreProjects.css';

const MoreProjects = () => {

  const [category, setCategory]= useState('portfolio');

  return (
    <section className="more-projects">
      <header>
        <h1>All Projects</h1>
        <nav>
          <button className="active-category">Portfolios</button>
          <button>Business</button>
          <button>Ecommerce</button>
          <button>Entertainment</button>
        </nav>
      </header>
      <div className="more-projects__cards">
        {projectsLibrary.map(project => {
          if (project.category === category) {
            return <ProjectCard project={project}/>
          }
        })}
      </div>
    </section>
  );
}

export default MoreProjects;