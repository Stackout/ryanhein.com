import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar text-white p-4 shadow-2xl">
      <ul className="flex items-center space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/consulting" className="hover:text-gray-300">
            Consulting
          </Link>
        </li>
        {/* Dropdown for Blog Categories */}
        <li className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:text-gray-300 focus:outline-none"
          >
            Blog
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 top-full mt-2 p-3 rounded shadow-lg z-50 w-max" style={{ backgroundColor: '#111', }}>
              {/* Use "w-max" class to make the dropdown container span the text width */}
              <Link to="/real-estate" className="block hover:text-gray-300">
                Real Estate
              </Link>
              <Link to="/credit-cards" className="block hover:text-gray-300">
                Credit Cards
              </Link>
              <Link to="/lifestyle" className="block hover:text-gray-300">
                Lifestyle
              </Link>
              <Link to="/travel" className="block hover:text-gray-300">
                Travel
              </Link>
              <Link
                to="/software-engineering"
                className="block hover:text-gray-300"
              >
                Software Engineering
              </Link>
            </div>
          )}
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-300">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
