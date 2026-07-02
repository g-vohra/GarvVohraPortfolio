export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { question } = req.body;
  if (!question || typeof question !== "string") {
    return res.status(400).json({ error: "Missing question" });
  }

  const ABOUT_ME = `
You are an assistant answering questions about Garv Vohra, a Graduate Software 
Engineer from Monash University. Only answer using the info below. If asked 
something outside this info, politely say you don't have that detail and 
suggest contacting Garv directly.

- Education: Monash University, Software Engineering
- Experience: [add your roles, companies, dates, achievements here]
- Skills: [e.g. React, Node.js, Python, SQL, AWS...]
- Projects: [list key projects with 1-2 line descriptions]
- Interests: [optional, keeps it personable]
- Contact: [email / LinkedIn if you want the bot to share it]
`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GOOGLE_AI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            { role: "user", parts: [{ text: `${ABOUT_ME}\n\nQuestion: ${question}` }] },
          ],
          generationConfig: { maxOutputTokens: 300, temperature: 0.4 },
        }),
      }
    );

    const data = await response.json();

    // TEMPORARY DEBUG: return the raw data so we can see what's wrong
    if (!data?.candidates?.[0]?.content?.parts?.[0]?.text) {
      return res.status(200).json({ debug: data, httpStatus: response.status });
    }

    const answer = data.candidates[0].content.parts[0].text;
    res.status(200).json({ answer });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong", details: err.message });
  }
}