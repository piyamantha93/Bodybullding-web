
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ brand = "MyStore", links = [], cartCount = 0 }) => {
  const [searchTerm, setSearchTerm] = useState('');

 
  return (
    <nav className="bg-gray-200 shadow-md text-gray-700 w-full z-50">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Brand */}
        <div className="text-2xl font-extrabold text-red-700">
          <Link to="/">{brand}</Link>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0 text-sm md:text-base font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className="hover:text-red-600 transition duration-200">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-8 mt-4 md:mt-0">
          {/* User Icon */}
          <Link to="/login" className="text-gray-700 hover:text-gray-500">
            <i className="fas fa-user text-xl"></i>
          </Link>

          {/* Cart Icon with count */}
          <Link to="/cart" className="relative text-gray-700 hover:text-gray-500">
            <i className="fas fa-shopping-cart text-xl"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1.5">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Search Bar Centered Below */}
  `<div className="bg-gray-200 border-t border-gray-200 py-2">
  <form
    onSubmit={(e) => {
      e.preventDefault();
      // Call your search logic here
      console.log("Searching for:", searchTerm);
    }}
    className="max-w-xl mx-auto flex items-center bg-white border border-gray-300 rounded-full shadow-sm px-4"
  >
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search products..."
      className="flex-1 py-3 px-3 text-sm outline-none rounded-full"
    />
    <button
      type="submit"
      className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-sm font-medium"
    >
      Search
    </button>
  </form>
</div>`
    </nav>
  );
};

export default Navbar;
