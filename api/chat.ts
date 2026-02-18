import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, history } = req.body;

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        ...(history || []),
        { role: "user", parts: [{ text: message }] },
      ],
      config: {
        systemInstruction: `Bạn là trợ lý AI...`,
        temperature: 0.7,
      },
    });

    res.status(200).json({ reply: response.text });
  } catch (error) {
    res.status(500).json({ error: "AI error" });
  }
}
