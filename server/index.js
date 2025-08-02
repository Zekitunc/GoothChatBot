import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';

const app = express();
const port = 3001; 

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: "AIzaSyAjsQ-0hyLbCk2tUKtCEY6xbAPcPZZTG-4", //priv api
});



app.post('/', async (req, res) => {
  try {
    const contents = req.body.contents;
    const model = 'gemini-2.0-flash'; // model

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
  console.log(`Server listening at http://localhost:${port}`); //port dinle
});

