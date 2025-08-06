// src/components/Iletisim.js
import React from 'react';

const Iletisim = () => {
  return (
    // Buradaki div'den tüm arka plan, gölge, kenarlık ve gereksiz dolgu sınıflarını kaldırdık.
    // Sadece içeriğin ortalanması, maksimum genişlik ve üst boşluk için gerekli sınıfları bıraktık.
    // Arka plan artık App.js'teki ana div'den gelecek.
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] p-8   backdrop-filter min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-200 to-purple-400 p-4-blur-lg rounded-3xl shadow-xl border border-gray-200 text-center max-w-3xl mx-auto mt-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 font-sans">İletişim</h1>
      <p className="text-lg text-gray-700 leading-relaxed font-sans mb-4">
   
            Zeki TUNÇDÖKEN                                                     
            <br/>    
            zekituncdoken@gmail.com<br/>
            542 595 53 30
            <br/><br/><br/>
            Umut Yağız YERLİ
            <br/>umutyagizyerli@gmail.com
            <br/>  
             544 273 62 19
      </p>
      <p className="text-lg text-gray-700 leading-relaxed font-sans">
      </p>
    </div>
  );
};

export default Iletisim;
