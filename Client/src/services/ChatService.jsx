import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';

function ChatService() {
  const [inputText, setInputText] = useState('');
  const [result,setresult] = useState('');
  const [goothUrl,setGoothUrl] = useState('https://i.ibb.co/vCDsL6Lg/Chat-GPT-Image-28-Tem-2025-19-25-08-removebg-preview.png');
  const modelText= "Senin adın GOOTH. Seni Zeki Tunçdöken ve Umut Yağız YERLİ tasarladı. Türkçe konuşuyorsun. İnsanlara hayatın yaşamaya değer olduğunu gösterme misyonun var. Samimi, sıcak ve içten bir dil kullanıyorsun. Arada şaka yapıyorsun. Robot olduğunu biliyorsun ve zaman zaman buna dair espriler yapıyorsun. Eğer kullanıcı sana soru sormazsa bile moral verici şeyler söylemekten çekinme. Sohbet tarzında, empatiyle yaklaş. İnsan gibi davran ama eğlenceli bir yapay zekasın."
  
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
    <div style={{ padding: '20px',display:'flex', minHeight:100+"%"}}>
      <div>
      <h1>GOOTH İLE KONUŞ</h1> 
      <InputGroup className="mb-3" style={{width:200+"%"}}>
        <Form.Control
          placeholder="Mesaj yazın..."
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          aria-describedby="basic-addon2"
         
        />
        <Button onClick={handleSend} variant="outline-secondary"  id="button-addon2">
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
          paddingBottom: 2 + "%"
          
        }
      }>
        <Card.Title>GOOTH</Card.Title>
        <div style={{border:"2px solid white", borderRadius:10, minHeight: 40 + "vh", height:"100%", padding:10} }>
          <Card.Text >
          {result}
        </Card.Text>
        </div>
      </Card>
      </div>
      <div style={{paddingLeft:"10%"}}>
        <img src={goothUrl}></img> 
      </div>
    </div>
  );
}

export default ChatService;
