// CUSTOM MODULES
import { account } from "../../lib/appwrite";
import { getConversationTitle } from "../../api/googleAi";

const userPromptAction = async (formData) => {
    const userPrompt = formData.get("user_prompt");

    // GET CURRENT USER ACCOUNT DATA
    const user = await account.get();

    // GET A CONVERSATION TITLE BASED ON THE USER PROMPT
    const conversationTitle = await getConversationTitle(userPrompt);
    console.log(conversationTitle);
    

    return null;
};

// HANDLE INCOMING REQUEST BASED ON REQUEST METHOD
const appAction = async ({ request }) => {
    const formData = await request.formData();
    const requestType = formData.get("request_type");

    if (requestType === "user_prompt") 
        return await userPromptAction(formData);
};

export default appAction;