import React from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom'

import Hero from '../src/components/Hero';
import Menu from '../src/components/Menu';
import Header from '../src/components/Header';
import "tailwindcss/tailwind.css";

const App = () => {
  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </Router>
  );
};

export default App;
