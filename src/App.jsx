import React from 'react';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Art from './pages/Art';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import '../index.css'; 

const App = () => (
  <ThemeProvider>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/art" element={<Art />} />
    </Routes>
  </ThemeProvider>
);

export default App;