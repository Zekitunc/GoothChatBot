// src/components/InputSection.js
import React from 'react';
import Spinner from './icons/Spinner';

const InputSection = ({ productLink, setProductLink, onAnalyze, isLoading }) => {
  // Enter tuşuna basıldığında analizi başlatan fonksiyon
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onAnalyze();
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-2xl px-4 mb-8">
      <input
        type="text"
        value={productLink}
        onChange={(e) => setProductLink(e.target.value)}
        onKeyPress={handleKeyPress} // Enter tuşu dinleyicisini buraya ekledik
        placeholder="Bir e-ticaret ürün linki yapıştırın"
        className="w-full md:w-3/4 p-4 text-lg bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-full shadow-lg border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out font-sans text-gray-800 placeholder-gray-500"
      />
      <button
        onClick={onAnalyze}
        disabled={isLoading}
        className="mt-4 md:mt-0 md:ml-4 px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? <Spinner /> : 'Yorumları Analiz Et'}
      </button>
    </div>
  );
};

export default InputSection;
