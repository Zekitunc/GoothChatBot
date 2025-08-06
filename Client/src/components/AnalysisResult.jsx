// src/components/AnalysisResult.js
import React from 'react';
import SmileyIcon from './icons/SmileyIcon';
import WarningIcon from './icons/WarningIcon';

const AnalysisResult = ({ analysisResult }) => {
  // Puanı dairesel ilerleme çubuğu olarak görselleştiren yeni fonksiyon
  const renderCircularProgressBar = (score) => {
    const radius = 50; // Dairenin yarıçapı
    const circumference = 2 * Math.PI * radius; // Dairenin çevresi
    const percentage = Math.max(0, Math.min(100, score)); // Puanın 0-100 arasında olduğundan emin olalım
    const offset = circumference - (percentage / 100) * circumference; // İlerleme ofseti

    return (
      <div className="relative w-32 h-32 flex items-center justify-center mb-4">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
          {/* Arka plan çemberi */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="10"
          />
          {/* İlerleme çemberi */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="url(#gradient)" // Gradyan rengi kullan
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          />
          {/* Gradyan tanımı */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4CAF50" /> {/* Yeşil */}
              <stop offset="100%" stopColor="#2196F3" /> {/* Mavi */}
            </linearGradient>
          </defs>
        </svg>
        {/* Puan metni */}
        <div className="absolute text-3xl font-bold text-purple-600 font-sans">
          {score}
        </div>
      </div>
    );
  };

  // Madde madde olumlu/olumsuz yönleri render eden yardımcı fonksiyon
  const renderPointsList = (points, colorClass) => {
    let pointsArray = [];

    // Gelen verinin dizi mi yoksa string mi olduğunu kontrol et
    if (Array.isArray(points)) {
      pointsArray = points;
    } else if (typeof points === 'string') {
      // Eğer string ise, satır sonu karakterlerine göre böl
      pointsArray = points.split('\n').filter(item => item.trim() !== '');
    } else {
      // Diğer durumlar için boş dizi döndür
      return <p className="text-gray-600 text-center font-sans">Veri bulunamadı.</p>;
    }

    if (pointsArray.length === 0) {
      return <p className="text-gray-600 text-center font-sans">Belirtilen bir madde bulunamadı.</p>;
    }

    return (
      <ul className="list-none p-0 m-0 text-left w-full">
        {pointsArray.map((point, index) => {
          // Maddenin başındaki olası kısa çizgileri, yıldızları veya boşlukları temizle
          const cleanedPoint = point.trim().replace(/^[-*]\s*/, '');

          return (
            <li key={index} className="flex items-start mb-2 last:mb-0">
              <span className={`inline-block w-3 h-3 rounded-full mr-2 mt-2 ${colorClass}`}></span>
              <p className="text-gray-600 font-sans flex-1">{cleanedPoint}</p>
            </li>
          );
        })}
      </ul>
    );
  };

  // Gemini'nin yorumunu kontrol eden ve gerekirse özel mesajı gösteren mantık
  const getGeminiOpinionText = () => {
    // Eğer olumlu veya olumsuz puanlar boşsa (veya çok kısa/jenerik bir mesaj içeriyorsa),
    // bu genellikle yeterli veri olmadığını gösterir.
    const isPositivePointsEmpty = !analysisResult.positive_points || (Array.isArray(analysisResult.positive_points) && analysisResult.positive_points.length === 0) || (typeof analysisResult.positive_points === 'string' && analysisResult.positive_points.trim().length < 10);
    const isNegativePointsEmpty = !analysisResult.negative_points || (Array.isArray(analysisResult.negative_points) && analysisResult.negative_points.length === 0) || (typeof analysisResult.negative_points === 'string' && analysisResult.negative_points.trim().length < 10);

    // Eğer puan 0 ise ve olumlu/olumsuz yorumlar boşsa, özel mesajı göster
    if (analysisResult.sentiment_score === 0 && isPositivePointsEmpty && isNegativePointsEmpty) {
      return "Yeterli veri bulunamadı. Lütfen daha fazla yorumu olan farklı bir ürün linki deneyin.";
    }
    // Aksi takdirde, Gemini'nin orijinal yorumunu göster
    return analysisResult.gemini_opinion;
  };


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-8">
      {/* Olumlu Yönler Kartı */}
      <div className="flex flex-col items-center p-6 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200 transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
        <SmileyIcon />
        <h2 className="text-2xl font-bold text-gray-800 mb-2 font-sans">Olumlu Yönler</h2>
        {renderPointsList(analysisResult.positive_points, 'bg-green-500')}
      </div>

      {/* Olumsuz Yönler Kartı */}
      <div className="flex flex-col items-center p-6 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200 transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
        <WarningIcon />
        <h2 className="text-2xl font-bold text-gray-800 mb-2 font-sans">Olumsuz Yönler</h2>
        {renderPointsList(analysisResult.negative_points, 'bg-red-500')}
      </div>

      {/* Ürün Puanı Kartı */}
      <div className="flex flex-col items-center p-6 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200 transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 font-sans">Ürün Puanı</h2>
        {renderCircularProgressBar(analysisResult.sentiment_score)}
        <p className="text-gray-600 text-center mt-4 font-sans">Yorum analizine göre</p>
      </div>

      {/* Gemini'nin Yorumu Kartı */}
      <div className="flex flex-col items-center p-6 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200 transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 font-sans">GOOTH'un Yorumu</h2>
        <p className="text-gray-600 text-center font-sans">{getGeminiOpinionText()}</p> {/* Yeni fonksiyonu burada kullanıyoruz */}
      </div>
    </div>
  );
};

export default AnalysisResult;
