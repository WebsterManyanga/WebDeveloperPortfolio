import Carousel from 'react-multi-carousel';
import './Certifications.css';
import { certifications } from '../../certifications';
import Education from '../Education/Education';
import CertificateCard from '../CertifcateCard/CertificateCard';

const Certifications = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };


  return (
    <section className="certifications">
      <h1>Certifications</h1>
      <Carousel
        responsive={responsive}
        arrows
        infinite
        draggable
        pauseOnHover
        slidesToSlide={1}
        swipeable
        customTransition='all .5s linear'

      >
        {certifications.map(certification => <CertificateCard certificate={certification} />)}
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