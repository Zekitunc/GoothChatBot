// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between w-full">
      <div className="text-3xl font-bold">Gooth</div>
      <div className="space-x-5">
        <Link to="/" className=" font-bold text-xl text-black hover:text-indigo-600">Anasayfa</Link>
        <Link to="/hakkimizda" className=" text-xl  font-bold text-black hover:text-indigo-600">Hakkımızda</Link>
        <Link to="/iletisim" className=" text-xl  font-bold text-black hover:text-indigo-600" style={{paddingRight:'3vh'}}>İletişim</Link>
      </div>
    </nav>
  );
};

export default NavBar;
