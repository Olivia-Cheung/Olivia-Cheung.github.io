import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '/index.css'; 
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();
  return (
    <footer
      className="font-headerAndFooter"
      style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100vw',
        background: '#16171f',
        color: '#B8CFCE',
        zIndex: 100,
        padding: '1rem 0',
      }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p>
          <FaRegCopyright /> 2025 Olivia Cheung | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;