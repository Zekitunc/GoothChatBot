// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        {/* Gemini logosu (örnek SVG) */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5c4.673 0 8.5 3.827 8.5 8.5s-3.827 8.5-8.5 8.5-8.5-3.827-8.5-8.5S7.327 3.5 12 3.5z" fill="#000" />
          <path d="M12 5.5a6.5 6.5 0 0 0-6.5 6.5 6.5 6.5 0 0 0 6.5 6.5 6.5 6.5 0 0 0 6.5-6.5A6.5 6.5 0 0 0 12 5.5zm0 1.5c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z" fill="#4285F4" />
          <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill="#DB4437" />
          <path d="M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" fill="#F4B400" />
          <path d="M15 12a3 3 0 1 0-6 0h6z" fill="#0F9D58" />
        </svg> */}
        {/* <span className="font-sans text-5xl font-bold text-gray-800 ml-4">Gemini</span> */}
      </div>
      <h1 className="font-sans text-6xl font-bold text-white tracking-wide mt-4">GOOTH'a Hoşgeldin</h1>
    </div>
  );
};

export default Header;