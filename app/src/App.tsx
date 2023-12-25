import React, { useEffect, useRef } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Certifications from './Components/Certifications/Certifications';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import ThatsAllFolks from './Components/ThatsAllFolks/ThatsAllFolks';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {

  return (
    <div className="App">
      <ScrollToTop />
      <Home />
      <Projects />
      <Certifications />
      <WorkExperience />
      <ThatsAllFolks />
    </div>
  );
}

export default App;
