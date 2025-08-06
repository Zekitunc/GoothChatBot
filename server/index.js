import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';

const app = express();
const port = 3001;
const geminiAPI = process.env.GEMINI_API_KEY;

app.use(cors());
app.use(express.json());


const ai = new GoogleGenAI({
  apiKey: geminiAPI,
});

if (!geminiAPI) {
  console.error("❌ GEMINI_API_KEY bulunamadı.");
  process.exit(1);
}

app.post('/', async (req, res) => {
  try {
    const contents = req.body.contents;
    const model = 'gemini-2.0-flash'; // model

    const responseStream = await ai.models.generateContentStream({
      model,
      contents,
    });

    let fullText = '';
    for await (const chunk of responseStream) {
      fullText += chunk.text;
    }

    // --- ÖNEMLİ DÜZELTME BURADA BAŞLIYOR ---
    // Gemini'nin yanıtının bazen Markdown kod bloğu içinde (```json ... ```) gelme ihtimaline karşı düzenleme.
    // JSON bloğunu bir regex ile ayıklıyoruz.
    let rawJsonString = '';
    const jsonMatch = fullText.match(/```json\s*([\s\S]*?)\s*```/);

    if (jsonMatch && jsonMatch[1]) {
      // Eğer Markdown bloğu varsa, sadece içindeki JSON string'ini al.
      rawJsonString = jsonMatch[1];
    } else {
      // Eğer Markdown bloğu yoksa (Gemini doğrudan JSON döndürdüyse), tüm metni JSON olarak kabul etmeye çalış.
      rawJsonString = fullText;
    }

    let parsedResult;
    try {
      // Backend'de JSON string'ini parse et.
      parsedResult = JSON.parse(rawJsonString);
    } catch (parseError) {
      console.error('Backend: Gemini yanıtı JSON parse hatası:', parseError);
      // Geçersiz JSON gelirse, frontend'e hata mesajı gönder.
      return res.status(500).json({
        error: 'Gemini\'den gelen yanıt geçerli bir JSON formatında değil.',
        rawGeminiResponse: fullText // Hata ayıklama için ham yanıtı da gönderebiliriz.
      });
    }

    // Başarılı bir şekilde parse edilen JSON objesini direkt olarak frontend'e gönder.
    // Artık frontend'de tekrar JSON.parse yapmaya gerek kalmayacak.
    res.json({ result: parsedResult });
    // --- ÖNEMLİ DÜZELTME BURADA BİTİYOR ---

  } catch (error) {
    console.error('Sunucu hatası:', error);
    res.status(500).json({ error: 'Bir hata oluştu.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`); //port dinle
});
