import './Home.css';
import { FaChevronDown } from "react-icons/fa6";

const Home = () => {
  return (
    <section className="home">
      <div className="heading" >
        <h1 className="heading__top">WEBSTER'S</h1>
        <h1 className="heading__mid">PORTFOLIO.</h1>
        <h1 className="heading__end">WEB DEVELOPER</h1>
      </div>
    <a href='#about-me' className='home__proceed wobble-hor-bottom'><FaChevronDown /></a>
    </section>
  );
}

export default Home;