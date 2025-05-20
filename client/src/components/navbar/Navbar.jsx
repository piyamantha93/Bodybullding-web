// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = ({ brand, links }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log('Search Term:', searchTerm);
//     // Optional: Add search functionality or redirect here
//   };

//   return (
//     <nav className="bg-gray-200 text-gray-700 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
//         {/* Brand */}
//         <Link to="/" className="text-2xl font-bold text-red-700">
//           {brand}
//         </Link>

//         {/* Navigation Links (centered) */}
//         <ul className="flex space-x-14 text-sm md:text-base font-medium">
//           {links.map((link, index) => (
//             <li key={index}>
//               <Link to={link.path} className="hover:text-gray-500">
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <form onSubmit={handleSearch} className="flex items-center space-x-2">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Search..."
//               className="px-3 py-1 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
//             />
//             <button
//               type="submit"
//               className="text-gray-700 hover:text-gray-400"
//             >
//               <i className="fas fa-search"></i>
//             </button>
//           </form>
          
//         {/* Icons + Search (Right Aligned) */}
//         <div className="flex items-center space-x-4">
//           {/* Icons */}
//           <Link to="/user" className="text-gray-700 hover:text-gray-500">
//             <i className="fas fa-user text-xl"></i>
//           </Link>
//             <Link to="/cart" className="text-gray-700 hover:text-gray-500">
//             <i className="fas fa-shopping-cart text-xl"></i>
//           </Link>

//           {/* Search Form */}
         
          
//         </div>
        
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ brand, links, cartCount = 0 }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search Term:', searchTerm);
  };

  return (
    <nav className="bg-gray-100 shadow-md text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Brand */}
        <div className="text-2xl font-extrabold text-red-700">
          <Link to="/">{brand}</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className="hover:text-red-600 transition duration-200">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right section: Search + Icons */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <form onSubmit={handleSearch} className="flex items-center border border-gray-300 rounded-md px-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="px-2 py-1 w-24 md:w-36 text-sm focus:outline-none"
            />
            <button type="submit" className="text-gray-700 hover:text-gray-500">
              <i className="fas fa-search"></i>
            </button>
          </form>

          {/* User Icon */}
         <Link to="/client/src/pages/register/Login.jsx" className="text-gray-700 hover:text-gray-500">
            <i className="fas fa-user text-xl"></i>
          </Link>

          {/* Cart Icon */}
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
    </nav>
  );
};

export default Navbar;

