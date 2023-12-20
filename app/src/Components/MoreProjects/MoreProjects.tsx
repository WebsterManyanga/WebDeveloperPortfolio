import { useState } from "react";
import './MoreProjects.css';
import { Link, Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const MoreProjects = () => {

  const [category, setCategory]= useState('portfolios');

  return (
    <section className="more-projects">
      <header>
        <h1>All Projects</h1>
        <nav>
          <Link 
            to='portfolios' 
            className={`${category === 'portfolios' && 'active-category'} more-projects__nav-item`}
            onClick={() => setCategory('portfolios')}
          >
              Portfolios
          </Link>
          <Link 
            to='business' 
            className={`${category === 'business' && 'active-category'} more-projects__nav-item`} 
            onClick={() => setCategory('business')}
          >
            Business
          </Link>
          <Link 
            to='ecommerce' 
            className={`${category === 'ecommerce' && 'active-category'} more-projects__nav-item`} 
            onClick={() => setCategory('ecommerce')}
          >
            Ecommerce
          </Link>
          <Link 
            to='fun' 
            className={`${category === 'fun' && 'active-category'} more-projects__nav-item`} 
            onClick={() => setCategory('fun')}
          >
            Fun
          </Link>
        </nav>
      </header>
      <div className="more-projects__cards">
        <Outlet />
      </div>
      <Link to={'/#projects'} className="more-projects__see-less"><FaArrowLeft className="shake-left"/> See Less </Link>
    </section>
  );
}

export default MoreProjects;