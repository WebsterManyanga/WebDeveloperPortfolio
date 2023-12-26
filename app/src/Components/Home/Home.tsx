import { useEffect, useRef, useState } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import './Home.css';
import { FaChevronDown } from "react-icons/fa6";

const Home = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({behavior: 'smooth'});
    }
  }
  
  const [displayName, setDisplayName] = useState('heading__top--hide');

  useEffect(() => {
    setTimeout(() => setDisplayName('heading__top--show'), 1000)
  }, [])
  
  return (
    <>
      <section className="home">
        <div className="heading">
          <h1 className={`heading__top ${displayName}`}>WEBSTER'S</h1>
          <h1 className="heading__mid">PORTFOLIO.</h1>
          <h1 className="heading__end">WEB DEVELOPER</h1>
        </div>
        <button 
          className={`home__proceed wobble-hor-bottom`}
          onClick={() => scrollToAbout()}
        >
          <FaChevronDown className='down-icon'/>
        </button>
      </section>
      <AboutMe ref={aboutRef}/>
    </>
  );
}

export default Home;