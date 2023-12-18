import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import Certifications from './Components/Certifications/Certifications';
import WorkExperience from './Components/WorkExperience/WorkExperience';

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Projects />
      <Certifications />
      <WorkExperience />
    </div>
  );
}

export default App;
