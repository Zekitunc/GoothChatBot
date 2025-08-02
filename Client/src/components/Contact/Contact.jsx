

const Contact = () => {
    return (
    <div className="container-fluid d-flex align-items-center justify-content-center" 
    
    style={{
        backgroundColor:"rgba(0, 0, 0, 0.4)"
        
    }}>
      <div className="row w-70">
        {/* Sol taraf: Yazı */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-5" style={{height:100+ 'v'}}>
          <h1 className="display-4 mb-3">İLETİŞİM</h1>
          <p className="lead" style={{fontSize:30}}>
            
                Zeki Tunçdöken ve Umut Yağız Yerli olarak; yapay zeka, yazılım geliştirme ve kullanıcı deneyimi alanlarına ilgi duyan iki geliştiriciyiz. 
           <br/><br/><br/>     
            Zeki TUNÇDÖKEN                                                     
            <br/>    
            zekituncdoken@gmail.com<br/>
            542 595 53 30
            <br/><br/><br/>
            Umut yağız YERLİ
            <br/>umutyagizyerli@gmail.com
            <br/>  
             544 273 62 19
          </p>   
        </div>

        {/* Sağ taraf: Fotoğraf */}
        <div className="col-md-6 d-none d-md-block">
          <img
            src="https://blog.globalbilgi.com.ua/wp-content/uploads/2024/01/8-1140x694.webp"
            alt="Landing"
            className="img-fluid h-100 w-70 object-fit-cover"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
