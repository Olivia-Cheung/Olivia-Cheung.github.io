import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '/index.css';
import { AiFillMoon } from "react-icons/ai";

const Header = () => {
  const location = useLocation();
  return (
    <nav
      className="navbar navbar-expand-lg font-headerAndFooter px-4"
      style={{
        backgroundColor: '#16171f',
        width: '100vw',
        left: 0,
        right: 0,
        position: 'relative',
        marginLeft: 'calc(50% - 50vw)',
        marginRight: 'calc(50% - 50vw)',
        paddingLeft: '2rem',
        paddingRight: '2rem',
      }}
    >
      <div className="container-fluid font-headerAndFooter" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <button><AiFillMoon /></button>
        <span className="navbar-brand fw-bold font-headerAndFooter" style={{ color: '#B8CFCE' }}>Olivia Cheung</span>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 font-headerAndFooter">
          <li className="nav-item">
            <Link
              className={`nav-link${location.pathname === '/' ? ' active' : ''}`}
              to="/"
              style={{ color: '#B8CFCE' }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link${location.pathname === '/projects' ? ' active' : ''}`}
              to="/projects"
              style={{ color: '#B8CFCE' }}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link${location.pathname === '/art' ? ' active' : ''}`}
              to="/art"
              style={{ color: '#B8CFCE' }}
            >
              Art
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link${location.pathname === '/about' ? ' active' : ''}`}
              to="/about"
              style={{ color: '#B8CFCE' }}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;