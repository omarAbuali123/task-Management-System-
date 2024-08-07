// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">Home</Link>
        <div>
          <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Login</Link>
          <Link to="/" className="bg-gray-600 text-white px-4 py-2 rounded">Home</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
