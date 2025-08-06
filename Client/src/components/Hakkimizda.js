// src/components/Hakkimizda.js
import React from 'react';

const Hakkimizda = () => {
  return (
    <div style={{textAlign:'center', padding:'10%'}} className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-200 to-purple-400 p-4">
      <h1 style={{paddingBottom:'5vh'}} className="text-5xl font-bold text-black mb-6 font-sans">Hakkımızda</h1>
      <p className="text-2xl text-black leading-relaxed font-sans mb-4">
        Bu proje, Zeki Tunçdöken ve Umut Yağız Yerli tarafından bir hackathon etkinliği kapsamında geliştirilmiştir.
        GOOTH, Google’ın gelişmiş dil modeli Gemini altyapısıyla desteklenen özel bir yapay zeka karakteridir.
      </p>
      <p className="text-2xl text-black leading-relaxed font-sans">
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