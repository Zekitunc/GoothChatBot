// src/components/Hakkimizda.js
import React from 'react';

const Hakkimizda = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] p-8   backdrop-filter min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-200 to-purple-400 p-4-blur-lg rounded-3xl shadow-xl border border-gray-200 text-center max-w-3xl mx-auto mt-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 font-sans">Hakkımızda</h1>
      <p className="text-lg text-gray-700 leading-relaxed font-sans mb-4">
        Bu proje, Zeki Tunçdöken ve Umut Yağız Yerli tarafından bir hackathon etkinliği kapsamında geliştirilmiştir.
        GOOTH, Google’ın gelişmiş dil modeli Gemini altyapısıyla desteklenen özel bir yapay zeka karakteridir.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed font-sans">
        GOOTH Ne Yapar?
Kullanıcılardan gelen E-Ticaret ürün linklerini analiz eder.
Her ürün için:
<br/>
🟢 Olumlu yönleri madde madde sıralar
<br/>
🔴 Olumsuz yönleri açıklar
<br/>
Yorum sayısı veya içerik yetersizse bunu dürüstçe belirtir
<br/><br/>
GOOTH, bizim bu yaklaşıma dair küçük ama iddialı bir prototipimizdir.
<br/><br/>
Neden Hackathon?<br/>
Hackathonlar; hızlı üretim, yaratıcı fikirler ve sınırları zorlayan çözümler için en iyi ortamlardan biridir. Biz de bu ruhla, ürün yorumlarını analiz eden, eğlenceli ve akıllı bir yapay zeka arkadaşı fikrini geliştirdik.
GOOTH, bu yarışmanın ruhuna uygun şekilde hızla geliştirildi ve kullanıcı deneyimi odaklı, gerçek bir problemi çözmeyi hedefleyen bir projedir.
      </p>
    </div>
  );
};

export default Hakkimizda;