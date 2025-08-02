
const About =() => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center" 
    
    style={{
        backgroundColor:"rgba(0, 0, 0, 0.4)"
        
    }}>
      <div className="row w-70">
        {/* Sol taraf: Yazı */}
        <div className="col-md-7 d-flex flex-column justify-content-center align-items-start p-5">
          <h1 className="display-4 mb-3">HAKKIMIZDA</h1>
          <p className="lead">
            
Bu proje, Zeki Tunçdöken ve Umut Yağız Yerli tarafından bir hackathon etkinliği kapsamında geliştirilmiştir.
Yapay zekânın günlük yaşamda daha etkili ve kullanıcı dostu biçimde kullanılmasını hedefleyen bu çalışma, ürün analizlerini sadece bilgilendirici değil aynı zamanda eğlenceli ve insana yakın hale getirmeyi amaçlamaktadır.
<br/>
GOOTH, Google’ın gelişmiş dil modeli Gemini altyapısıyla desteklenen özel bir yapay zeka karakteridir. Sıradan bir ürün yorumlayıcıdan çok daha fazlasıdır. O, kendini zaman zaman elektrikli süpürge sanan, “çiplerim bile karar veremedi” diye serzenişte bulunan ve ürün incelerken mizahı elden bırakmayan yarı ciddi, yarı komik bir robot kişiliğe sahiptir. 😄
<br/><br/>
GOOTH Ne Yapar?
Kullanıcılardan gelen TrendYol ürün linklerini analiz eder.
Her ürün için:
<br/>
🟢 Olumlu yönleri madde madde sıralar
<br/>
🔴 Olumsuz yönleri açıklar
<br/>
Yorum sayısı veya içerik yetersizse bunu dürüstçe belirtir (“Bu kadar az yorumla devre kartım boşta çalıştı…”)
<br/><br/>
GOOTH’un temel farkı; kullanıcıyla ciddi bir değerlendirme yaparken, bunu yapay zekanın sıkıcı havasından uzak şekilde, insani bir mizah ile sunmasıdır.
<br/><br/>
Kimleriz?<br/>
Zeki Tunçdöken ve Umut Yağız Yerli olarak; yapay zeka, yazılım geliştirme ve kullanıcı deneyimi alanlarına ilgi duyan iki geliştiriciyiz.
Bu projede amacımız; yapay zekayı sadece analiz yapan bir araç olarak değil, karakteri olan bir yardımcı olarak konumlandırmak.
<br/>
GOOTH, bizim bu yaklaşıma dair küçük ama iddialı bir prototipimizdir.
<br/><br/>
Neden Hackathon?<br/>
Hackathonlar; hızlı üretim, yaratıcı fikirler ve sınırları zorlayan çözümler için en iyi ortamlardan biridir. Biz de bu ruhla, ürün yorumlarını analiz eden, eğlenceli ve akıllı bir yapay zeka arkadaşı fikrini geliştirdik.
GOOTH, bu yarışmanın ruhuna uygun şekilde hızla geliştirildi ve kullanıcı deneyimi odaklı, gerçek bir problemi çözmeyi hedefleyen bir projedir.
          </p>   
        </div>

        {/* Sağ taraf: Fotoğraf */}
        <div className="col-md-5 d-none d-md-block">
          <img
            src="https://as2.ftcdn.net/jpg/05/74/93/73/1000_F_574937307_wBF2dzc21w458qUFIiBD1JPSLYxCHYCg.jpg"
            alt="Landing"
            className="img-fluid h-100 w-70 object-fit-cover"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;