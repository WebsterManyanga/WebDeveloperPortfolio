import { useState } from "react";
import { projectsLibrary } from "../../projectsLibrary";
import ProjectCard from "../ProjectCard/ProjectCard";
import './MoreProjects.css';
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const MoreProjects = () => {

  const [category, setCategory]= useState('portfolio');

  return (
    <section className="more-projects">
      <header>
        <h1>All Projects</h1>
        <nav>
          <Link to='/portfolios' className="more-projects__nav-item active-category">Portfolios</Link>
          <Link to='/business' className="more-projects__nav-item">Business</Link>
          <Link to='/ecommerce' className="more-projects__nav-item">Ecommerce</Link>
          <Link to='/fun' className="more-projects__nav-item">Fun</Link>
        </nav>
      </header>
      <div className="more-projects__cards">

      </div>
      <Link to={'/#projects'} className="more-projects__see-less"><FaArrowLeft className="shake-left"/> See Less </Link>
    </section>
  );
}

export default MoreProjects;