import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '/index.css'; 
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="wrap">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p>
          <FaRegCopyright /> 2026 Olivia Cheung | All rights reserved
        </p>
      </div>
    </footer>
  )
};

export default Footer;