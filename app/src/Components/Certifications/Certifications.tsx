import Carousel from 'react-multi-carousel';
import './Certifications.css';
import { certifications } from '../../certifications';
import Education from '../Education/Education';

const Certifications = () => {
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
    <section className="certifications">
      <h1>Certifications</h1>
      <Carousel
        responsive={responsive}
        infinite
        className='certifications__carousel'
      >
        {certifications.map(certification => <div >{certification.title}</div>)}
      </Carousel>
      <div className='certifications__info'>
        <h2>Certifications</h2>
        <ul>
          {certifications.map(certification => <li>{certification.title} - <a href={certification.link}>{certification.linkSource}</a></li>)}
        </ul>
        <Education />
      </div>
    </section>
  );
}

export default Certifications;