// CUSTOM MODULES
import model from "../lib/googleAI";

// GENERATES CONVERSATION TITLE BASED ON USER PROMPT
const getConversationTitle = async (userPrompt) => {
    try {
        const result = await model.generateContent(
            `Given a user prompt, generate a concise and 
            informative title that accurately describes the conversation. 
            Consider keywords, topics, and the overall intent of the prompt.
            Response in plain text format, not markdown.
            
            Prompt: ${userPrompt}`,
        );
        return result.response.text();
    } catch (err) {
        console.log(`Error generating conversation title: ${err.message}`);
    };
};

// GENERATES AI RESPONSE FROM USER PROMPT AND CHAT HISTORY
const getAiResponse = async (userPrompt, chats = []) => {
    try {
        model.generationConfig = { temperature: 1.5 }
        const chat = model.startChat({ history: chats});

        const result = await chat.sendMessage(userPrompt);
        return result.response.text();
    } catch (err) {
        console.log(`Error generating AI response: ${err.message}`);
    };
};

export { getConversationTitle, getAiResponse };