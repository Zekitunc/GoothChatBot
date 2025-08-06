// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between w-full">
      <div className="text-xl font-bold">Gooth</div>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-indigo-600">Anasayfa</Link>
        <Link to="/hakkimizda" className="text-gray-700 hover:text-indigo-600">Hakkımızda</Link>
        <Link to="/iletisim" className="text-gray-700 hover:text-indigo-600">İletişim</Link>
      </div>
    </nav>
  );
};

export default NavBar;
