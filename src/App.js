import React from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom'

import Hero from '../src/components/Hero';
import Menu from '../src/components/Menu';
import Header from '../src/components/Header';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Projects from '../src/components/Projects';
import Resume from '../src/components/Resume';
import "tailwindcss/tailwind.css";


const App = () => {
  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Resume" element={<Resume/>}/>
      </Routes>
    </Router>
  );
};

export default App;
