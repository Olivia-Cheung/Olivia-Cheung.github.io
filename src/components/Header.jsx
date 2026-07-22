import React from 'react';
import ThemeToggle from './ThemeToggle';
import useTheme from '../hooks/useTheme.js';
import { Link, useLocation } from 'react-router-dom';
import '/index.css';


const Header = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme()
  return (
    <nav
      className="navbar navbar-expand-lg px-4">
      <div className="container" style={{ paddingLeft: 0, paddingRight: 0 }}>
         <ThemeToggle theme={theme} onToggle={toggleTheme} />
        <span className="brand fw-bold ">Olivia Cheung</span>
        <ul className="nav-right ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              className={`nav-link${location.pathname === '/' ? ' active' : ''}`}
              to="/"
            >
              Home
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              className={`nav-link${location.pathname === '/projects' ? ' active' : ''}`}
              to="/projects"
            
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link${location.pathname === '/art' ? ' active' : ''}`}
              to="/art"
            >
              Art
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;