import React from 'react';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Projects from './pages/Projects';
import Art from './pages/Art';
import { Routes, Route } from 'react-router-dom';
import '../index.css'; 

const App = () => (
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/art" element={<Art />} />
      </Routes>
   
);

export default App;