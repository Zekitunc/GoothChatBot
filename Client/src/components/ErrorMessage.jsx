// src/components/ErrorMessage.js
import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-500 bg-opacity-80 text-white font-bold p-4 rounded-lg mt-4 shadow-lg text-center">
      {message}
    </div>
  );
};

export default ErrorMessage;