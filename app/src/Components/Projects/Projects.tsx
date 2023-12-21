import { FaArrowRight, FaCaretRight } from "react-icons/fa6";
import { projectsLibrary } from "../../projectsLibrary";
import ProjectCard from "../ProjectCard/ProjectCard";
import './Projects.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MoreProjects from "../MoreProjects/MoreProjects";
import { Link } from "react-router-dom";



const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <section className="projects">
      <h1>PROJECTS.</h1>
      <Carousel
        responsive={responsive}
        infinite
      >
        {projectsLibrary.map(project => <ProjectCard project={project} />)}
      </Carousel>
      <Link to={'/more/portfolios'} className="projects__see-more">See More <FaArrowRight className="shake-left"/></Link>
    </section>
  );
}

export default Projects;