// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsSubMenuOpen(false); // Close sub-menu when opening the main menu
    }
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <header className="sticky top-0 flex justify-between items-center py-6 px-10 md:px-12 bg-white z-10">
      <h1 className="text-2xl md:text-3xl font-goudy whitespace-nowrap" style={{ color: '#fc8ece', letterSpacing: '0.125em', wordSpacing: 5 }}>SOLMARÍ GARCÍA</h1>
      <nav className="hidden md:flex">
        <ul className="flex space-x-4">
          <li><Link to="/about" className="text-gray-600 hover:text-gray-800">about</Link></li>
          <li className="relative group">
            <button className="transition text-gray-600 hover:text-gray-800 focus:outline-none">
              art
            </button>
            <ul className="absolute text-left py-1 mr-4 hidden group-hover:block bg-transparent">
              <li><Link to="/art/paintings" className="block py-2 text-gray-600 hover:text-gray-800">paintings</Link></li>
              <li><Link to="/art/printmaking" className="block py-2 text-gray-600 hover:text-gray-800">printmaking</Link></li>
              <li><Link to="/art/collages" className="block py-2  text-gray-600 hover:text-gray-800">collages</Link></li>
            </ul>
          </li>
          <li><Link to="/shop" className="text-gray-600 hover:text-gray-800">shop</Link></li>
          <li><Link to="/contact" className="text-gray-600 hover:text-gray-800">contact</Link></li>
        </ul>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full right-0 w-2/5 bg-white shadow-lg z-50 md:hidden">
          <ul className="space-y-4 text-right p-4 pr-6">
            <li><Link to="/about" className="text-gray-600 text-2xl hover:text-gray-800 block" onClick={toggleMenu}>about</Link></li>
            <li className="relative">
              <button onClick={toggleSubMenu} className="text-gray-600 text-2xl focus:outline-none block w-full text-right">
                art
              </button>
              {isSubMenuOpen && (
                <ul className="mt-2 text-right">
                  <li><Link to="/art/paintings" className="block py-2 text-gray-600 hover:text-gray-800" onClick={toggleMenu}>paintings</Link></li>
                  <li><Link to="/art/printmaking" className="block py-2 text-gray-600 hover:text-gray-800" onClick={toggleMenu}>printmaking</Link></li>
                  <li><Link to="/art/collages" className="block py-2 text-gray-600 hover:text-gray-800" onClick={toggleMenu}>collages</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/shop" className="text-gray-600 text-2xl hover:text-gray-800 block" onClick={toggleMenu}>shop</Link></li>
            <li><Link to="/contact" className="text-gray-600 text-2xl hover:text-gray-800 block" onClick={toggleMenu}>contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;