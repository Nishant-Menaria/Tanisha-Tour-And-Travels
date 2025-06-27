import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Brand Name */}
        <div className="text-2xl font-extrabold text-blue-600 tracking-wide">
          <Link to="/">Tanisha <span className="text-gray-800">Tour & Travels</span></Link>
        </div>

        {/* Navigation Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link 
              to="/#home"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/#services"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/#about"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/#contact"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* WhatsApp CTA */}
        <div className="hidden md:block">
          <a 
            href="https://wa.me/9414161002" 
            target="_blank" 
            rel="noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
