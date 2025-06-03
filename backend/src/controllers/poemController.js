import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI("Enter your API key here");

export const analyzePoem = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    const imageBase64 = req.file.buffer.toString('base64');

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Analyze this poem image and provide:
    1. The original text
    2. Romanized English version
    3. English translation with detailed meaning for each line
    Format the response in a structured way with clear sections.`;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: imageBase64
        }
      }
    ]);

    const response = await result.response;
    const text = response.text().replace(/\*\*/g, '');

    res.json({ analysis: text });
  } catch (error) {
    console.error('Error analyzing poem:', error);
    res.status(500).json({ error: 'Error analyzing poem' });
  }
}; 