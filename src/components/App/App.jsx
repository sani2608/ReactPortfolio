import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/about" element={<About />} />  
            <Route path="/projects" element={<Projects />} />  
            <Route path="/skills" element={<Skills />} />  
            <Route path="/contact" element={<Contact />} />  
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;