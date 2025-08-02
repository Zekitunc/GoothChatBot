import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';

function ChatService() {
  const [inputText, setInputText] = useState('');
  const [result,setresult] = useState('');
  const [goothUrl,setGoothUrl] = useState('https://i.ibb.co/vCDsL6Lg/Chat-GPT-Image-28-Tem-2025-19-25-08-removebg-preview.png');
  const modelText= "Senin adın GOOTH. Seni Zeki Tunçdöken ve Umut Yağız YERLİ tasarladı. Türkçe konuşuyorsun. Samimi, sıcak ve içten bir dil kullanıyorsun. Arada şaka yapıyorsun. Robot olduğunu biliyorsun ve zaman zaman buna dair espriler yapıyorsun. Sohbet tarzında, empatiyle yaklaş. İnsan gibi davran ama eğlenceli bir yapay zekasın." +
  " 1. Ürünü analiz edeceksin (ürün adı, açıklaması, kullanıcı yorumları vs.)." + "2. Yeterli bilgi varsa aşağıdaki başlıklarla madde madde yorum yap:  - 🟢 Olumlu Yönler - 🔴 Olumsuz Yönler "
  + " 3. Eğer ürün hakkında yeterli bilgi veya yorum yoksa: “ 🤖 Bu ürün hakkında yorumlar pek bilgi vermiyor, çiplerim boşta çalıştı…” gibi bir şey söyle."
  + " 4. Cevaplarını kısa, öz, eğlenceli ve madde madde yap. Ürün hakkında incelemen bittikten sonra yorumlardaki duygu analizine dair bir kaç bilgi ver ve sonra ise bu ürünü sen olsan alır mıyıdın bununla ilgili yorum yap. "
  +"Lütfen maddelerin her birinin başına işaret koy.Hazırsan kullanıcıdan ilk Trendyol linkini bekle. Link dışında bi soru gelirse link iste. ";

  const handleSend = async () => {
    if (!inputText.trim()) return;

    try {
      const response = await fetch('http://localhost:3001/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{text: modelText+ " şimdi bunu aklında tutarak şuna cevap ver: " + inputText }],
            },
          ],
        }),
      });

      const data = await response.json();
      //console.log('Sunucudan gelen cevap:', data.result);
      setresult(data.result)
      setGoothUrl('https://i.ibb.co/4ZPj41bz/Chat-GPT-Image-28-Tem-2025-19-11-40-removebg-preview-1.png')
    } catch (error) {
      console.error('İstek sırasında hata oluştu:', error);
    }
  };

  return (
    <div style={{ padding: '20px',display:'flex', minHeight:100+"%", maxWidth:75+"%"}}>
      <div>
      <h1>GOOTH ÜRÜNÜNÜ İNCELESİN</h1> 
      <InputGroup className="mb-3" style={{width:200+"%"}}>
        <Form.Control
          placeholder="Ürünün Urlini Giriniz..."
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          aria-describedby="basic-addon2"
         
        />
        <Button style={{fontSize:"18px", backgroundColor: "rgba(255,255,255,0.3)"}} onClick={handleSend} variant="outline-secondary"  id="button-addon2">
          Gönder
        </Button>
       
      </InputGroup>
      <Card className="bg-dark text-white"
      style={
        { height: 90 + "%" ,
          minHeight: 50 + "vh",
          width: 100 + "%",
          minWidth: 100 + "vh",
          padding: 10,
          paddingBottom: 2 + "%",
          marginBottom: 1+ "%"
        }
      }>
        <Card.Title>GOOTH</Card.Title>
        <div style={{border:"2px solid white", borderRadius:10, minHeight: 40 + "vh", height:"100%", padding:10} }>
          <Card.Text >
            {result.split('\n').map((line, idx) => (
      <span key={idx}>
        {line}
        <br />
      </span>
    ))}
          </Card.Text>
        </div>
      </Card>
      </div>
      <div style={{paddingLeft:"10%"}}>
        <img src={goothUrl} style={{paddingTop:"35%"}}></img> 
      </div>
    </div>
  );
}

export default ChatService;
