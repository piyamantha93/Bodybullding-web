import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-3">MuscleForge</h2>
          <p className="text-sm text-gray-900">
            Your ultimate destination for bodybuilding workouts, supplements, and motivation.
            Build. Strengthen. Conquer.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-900">
            <li><Link to="/" className="hover:text-gray-500">Home</Link></li>
            <li><Link to="/workouts" className="hover:text-gray-500">Workouts</Link></li>
            <li><Link to="/nutrition" className="hover:text-gray-500">Nutrition</Link></li>
            <li><Link to="/about" className="hover:text-gray-500">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gray-500">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact</h3>
          <p className="text-gray-900 text-sm">Email: support@muscleforge.com</p>
          <p className="text-gray-900 text-sm mb-4">Phone: +1 (800) 555-TRAIN</p>
          
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-900 text-sm">
        &copy; {new Date().getFullYear()} MuscleForge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
