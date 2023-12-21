import React, { useEffect, useRef } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Certifications from './Components/Certifications/Certifications';
import WorkExperience from './Components/WorkExperience/WorkExperience';

function App() {

  return (
    <div className="App">
      <Home />
      <Projects />
      <Certifications />
      <WorkExperience />
    </div>
  );
}

export default App;
