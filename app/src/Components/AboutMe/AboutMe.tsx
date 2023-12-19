import './AboutMe.css';
import me from '../../assets/me.png';
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const AboutMe = () => {

  const stuff = ['we', 'are', 'the', 'champions'];
  return (
    <section id='about-me' className="about">
      <h1>HELLO!</h1>
      <div className='about__top'>
        <p>
          Aspiring Frontend Developer with expert understanding of web development principles and practices, including HTML, CSS, and JavaScript.
          Strong written and verbal communication skills in English, with the ability to work independently and as part of a team.
          Organized and capable of managing multiple projects simultaneously, while maintaining code quality and adhering to best practices.
          Open to learning and ready to gain hands-on experience in web development, design, and teamwork.
        </p>
        <img src={me} alt="headshot" />
      </div>

      <div className='skills'>
        <h2>Technical Skills</h2>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>Git & Github</li>
          <li>Responsive Web Design</li>
          <li>
           Object-oriented programming
          </li>
          <li>Html & Css</li>
        </ul>
      </div>
      <button className='contact-btn bn632-hover bn26'>Contact Me</button>
    </section>
  );
}

export default AboutMe;