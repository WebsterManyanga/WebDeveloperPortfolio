import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
