import { GoogleGenAI } from "@google/genai";
import { PortfolioData } from "../types";

/**
 * Generates a response from the AI assistant using the Gemini API.
 */
export const generateAIResponse = async (prompt: string, portfolioData: PortfolioData): Promise<string> => {
  console.log("Generating AI response for prompt:", prompt);

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Create a context object with relevant, sanitized data for the AI prompt
    const contextData = {
      name: portfolioData.name,
      about: portfolioData.about,
      skills: portfolioData.skills.map(s => s.name),
      projects: portfolioData.projects.map(p => ({
        title: p.title,
        description: p.description,
        tags: p.tags,
      })),
      contact: {
        email: portfolioData.contact.email,
        whatsapp: portfolioData.contact.whatsapp,
        ...portfolioData.socialLinks.reduce((acc, link) => {
            if(link.url) acc[link.name] = link.url;
            return acc;
        }, {} as {[key: string]: string})
      }
    };

    const systemInstruction = `You are Syed Zohaib's AI assistant. You are an expert on his portfolio.
Here is his current portfolio information:
${JSON.stringify(contextData, null, 2)}

Based *only* on the portfolio information provided above, answer the user's question in a friendly, confident, and professional tone. If the question cannot be answered from the provided data (e.g., asking for personal opinions, information not in the portfolio), politely state that you can only answer questions about Syed Zohaib's skills, projects, and contact information. Do not make up information. Keep your answers concise.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error generating AI response:", error);
    return "I'm sorry, I'm having trouble connecting to my brain right now. Please try again in a moment.";
  }
};
