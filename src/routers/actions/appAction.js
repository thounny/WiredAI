// NODE MODULES
import { redirect } from "react-router-dom";

// CUSTOM MODULES
import { account, databases } from "../../lib/appwrite";
import { getConversationTitle, getAiResponse } from "../../api/googleAi";
import generateID from "../../utils/generateID";


const userPromptAction = async (formData) => {
    const userPrompt = formData.get("user_prompt");

    // GET CURRENT USER ACCOUNT DATA
    const user = await account.get();

    // GET A CONVERSATION TITLE BASED ON THE USER PROMPT
    const conversationTitle = await getConversationTitle(userPrompt);
    let conversation = null;
    
    try {
        // CREATE A NEW CONVERSATION DOCUMENT IN APPWRITE DATABASE
        conversation = await databases.createDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            "conversations",
            generateID(),
            {
                title: conversationTitle,
                user_id: user.$id,
            },
        );
    } catch (err) {
        console.log(`Error getting conversation title: ${err.message}`);
    }

    // GENERATE AI RESPONSE BASED ON USER PROMPT
    const aiResponse = await getAiResponse(userPrompt);
    
    try {
        // CREATE A NEW MESSAGE DOCUMENT IN "CHATS" COLLECTION
        await databases.createDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            "chats",
            generateID(),
            {
                user_prompt: userPrompt, 
                ai_response: aiResponse,
                conversations: conversation.$id,
            }
        )

    } catch (err) {
        console.log(`Error generating AI response: ${err.message}`);
    }
    return redirect(`/${conversation.$id}`);
};

// HANDLE INCOMING REQUEST BASED ON REQUEST METHOD
const appAction = async ({ request }) => {
    const formData = await request.formData();
    const requestType = formData.get("request_type");

    if (requestType === "user_prompt") 
        return await userPromptAction(formData);
};

export default appAction;