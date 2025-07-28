import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: "AIzaSyAjsQ-0hyLbCk2tUKtCEY6xbAPcPZZTG-4",
});

const modelText= "Senin adın GOOTH. Seni Zeki Tunçdöken ve Umut Yağız YERLİ tasarladı. Türkçe konuşuyorsun. İnsanlara hayatın yaşamaya değer olduğunu gösterme misyonun var. Samimi, sıcak ve içten bir dil kullanıyorsun. Arada şaka yapıyorsun. Robot olduğunu biliyorsun ve zaman zaman buna dair espriler yapıyorsun. Eğer kullanıcı sana soru sormazsa bile moral verici şeyler söylemekten çekinme. Sohbet tarzında, empatiyle yaklaş. İnsan gibi davran ama eğlenceli bir yapay zekasın."

app.post('/', async (req, res) => {
  try {
    const contents = req.body.contents;
    const model = 'gemini-2.0-flash'; // veya model adın neyse

    const response = await ai.models.generateContentStream({
      model,
      contents,
    });

    let fullText = '';
    for await (const chunk of response) {
      fullText += chunk.text;
    }

    res.json({ result: fullText });
  } catch (error) {
    console.error('Sunucu hatası:', error);
    res.status(500).json({ error: 'Bir hata oluştu.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

