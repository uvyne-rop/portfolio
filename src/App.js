import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import "tailwindcss/tailwind.css";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
