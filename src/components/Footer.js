// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto flex justify-center space-x-10">
        <a href="https://www.instagram.com/solmari.garcia/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
          <FontAwesomeIcon icon={faInstagram} size="lg"/>
        </a>
        <a href="https://www.tiktok.com/@solmari.garcia" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
          <FontAwesomeIcon icon={faTiktok} size="lg"/>
        </a>
      </div>
      <text className="flex text-xs justify-center text-center text-gray-500 mt-5">© 2024 All rights reserved.</text>
    </footer>
  );
};

export default Footer;