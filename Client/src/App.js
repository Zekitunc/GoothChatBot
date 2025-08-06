// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import InputSection from './components/InputSection';
import ErrorMessage from './components/ErrorMessage';
import AnalysisResult from './components/AnalysisResult';
import Spinner from './components/icons/Spinner';
import NavBar from './components/NavBar';
import Hakkimizda from './components/Hakkimizda';
import Iletisim from './components/Iletisim';

const Anasayfa = () => {
  const [productLink, setProductLink] = React.useState('');
  const [analysisResult, setAnalysisResult] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleAnalyze = async () => {
    if (!productLink.trim()) {
      setError("Lütfen geçerli bir ürün linki girin.");
      return;
    }

    setIsLoading(true);
    setAnalysisResult(null);
    setError(null);

    const promptText = `
      Bu URL'deki e-ticaret ürününün müşteri yorumlarını analiz et: ${productLink}. 
      Yorumlara dayanarak, olumlu yönlerin bir özetini, olumsuz yönlerin bir özetini, 
      100 üzerinden genel bir duygu puanını ve bu ürünü alıp almayacağına dair kişisel bir görüşünü sağla. 
      Analiz yapmaya yetecek kadar yorum bulamazsan GOOTH'un yorumu kısmında yeterli veriye sahip olmadığın için cevap veremeyeceğini söyle
      Yanıtı aşağıdaki yapıya sahip bir JSON nesnesi olarak biçimlendir:
      {
        "positive_points": "Yorumlarda bulunan olumlu yönleri madde madde özetle. Her satırda 1 madde olsun",
        "negative_points": "Yorumlarda bulunan olumsuz yönleri madde madde özetle. Her satırda 1 madde olsun",
        "sentiment_score": 0 ile 100 arasında bir sayı,
        "gemini_opinion": "Analize dayanarak ürünü alıp almayacağına dair kısa kişisel görüşün."
      }
      Lütfen her maddeyi ayrı bir satırda ve tek bir string olarak döndür.
    `;

    try {
      const response = await fetch('http://localhost:3001', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: promptText }] }]
        }),
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      setAnalysisResult(data.result);

    } catch (err) {
      console.error('API çağrısı sırasında bir hata oluştu:', err);
      setError('Analiz sırasında bir hata oluştu. Lütfen URL\'yi kontrol edip tekrar deneyin.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-200 to-purple-400 p-4 ">
      <Header />
      <InputSection
        productLink={productLink}
        setProductLink={setProductLink}
        onAnalyze={handleAnalyze}
        isLoading={isLoading}
      />
      {error && <ErrorMessage message={error} />}
      {isLoading && <Spinner />}
      {analysisResult && <AnalysisResult analysisResult={analysisResult} />}
    </div>
  );
};

export default function App() {
  return (
   
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/iletisim" element={<Iletisim />} />
      </Routes>
    </Router>
  
  );
}
