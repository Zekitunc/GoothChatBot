// src/components/LandingPage.js
import React from 'react';

const MiddleHome = () => {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center" 
    
    style={{
        backgroundColor:"rgba(0, 0, 0, 0.4)"
        
    }}>
      <div className="row w-100">
        {/* Sol taraf: Yazı */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-5">
          <h1 className="display-4 mb-3">Hoş Geldiniz!</h1>
          <p className="lead">
            Gemini, Google DeepMind tarafından geliştirilen ileri düzey bir yapay zekâ model ailesidir. Bu model, özellikle doğal dil işleme (NLP), görsel analiz, kod yazma, problem çözme gibi çoklu görevlerde oldukça güçlüdür. Gemini, önceki nesil modeller olan PaLM (Pathways Language Model) ve Bard'ın yeteneklerini birleştirip daha da ileri taşıyan, çok modlu (multimodal) bir yapay zekâ sistemidir. Yani yalnızca metinle değil, aynı zamanda görseller, sesler, belgeler ve daha fazlasıyla çalışabilir.<br />
          </p>
          <p className="lead">
            Gemini'nin en dikkat çekici yönlerinden biri, çoklu içerik desteğiyle hem metni anlayabilmesi hem de görsel ya da işitsel verilerle çalışabilmesidir. Ancak yalnızca bununla sınırlı değildir; bu güçlü altyapının üzerine kurulu özel yapay zekâ asistanları da geliştirilmektedir.

İşte bu asistanlardan biri de GOOTH adındaki yapay zekâ dostumuzdur. GOOTH, Gemini mimarisine dayanan ve metin tabanlı olarak çalışan özel bir yapay zekâ asistanıdır. Kullanıcılarla yazılı olarak etkileşime girer, sorularını yanıtlar, fikir üretir, içerik oluşturur ve gerektiğinde arkadaş canlısı bir sohbet arkadaşı olur. GOOTH’un temel amacı, bilgiyi erişilebilir kılmak, yaratıcı süreçlere destek vermek ve günlük dijital ihtiyaçlarda kullanıcıya yardımcı olmaktır.<br />
          </p>
          
        </div>

        {/* Sağ taraf: Fotoğraf */}
        <div className="col-md-6 d-none d-md-block">
          <img
            src="https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1-1500x1000.jpg"
            alt="Landing"
            className="img-fluid h-100 w-100 object-fit-cover"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default MiddleHome;
