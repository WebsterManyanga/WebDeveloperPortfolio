import './AboutMe.css';
import me from '../../assets/me.png';
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useState } from 'react';

const AboutMe = () => {
  const [contactMe, setContactMe] = useState(false);

  return (
    <section id='about-me' className="about">
      <h1>HELLO!</h1>
      <div className='about__top'>
        <img src={me} alt="headshot" />
        <p>
          Aspiring Frontend Developer with expert understanding of web development principles and practices, including HTML, CSS, and JavaScript.
          Strong written and verbal communication skills in English, with the ability to work independently and as part of a team.
          Organized and capable of managing multiple projects simultaneously, while maintaining code quality and adhering to best practices.
          Open to learning and ready to gain hands-on experience in web development, design, and teamwork.
        </p>
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
      <button className={`${contactMe && 'contact-btn--expanded'} bn632-hover bn26`} onClick={() => setContactMe(!contactMe)}>
        {contactMe ?
          <ul className='contact-btn__icons'>
            <li><a href="mailto:webster.zw@gmail.com"><MdEmail /></a></li>
            <li><a href="https://www.linkedin.com/in/webster-manyanga-a4770a21b/"><FaLinkedin /></a></li>
            <li><a href="https://github.com/WebsterManyanga"><FaGithub /></a></li>
            <li><a href="https://www.instagram.com/websterr_._/"><FaInstagram /></a></li>
          </ul> :
          'Contact Me' 
        }
      </button>
    </section>
  );
}

export default AboutMe;