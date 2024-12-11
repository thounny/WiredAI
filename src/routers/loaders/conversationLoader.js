// NODE MODULES
import { redirect } from "react-router-dom";

// CUSTOM MODULES
import { account, databases } from "../../lib/appwrite";

const conversationLoader = async ({ params }) => {
    const { conversationId } = params;  

    const data = {}

    try {
        // RETRIEVE CURRENT USER ACCOUNT DATA
        data.user = await account.get();
    } catch (err) {
        console.log(`Error getting user account: ${err.message}`);

        // REDIRECT TO LOGIN PAGE IF ERROR
        return redirect("/login");
    }

    try {
        // FETCH CONVERSATION DATA FROM APPWRITE DATABASE
        data.conversation = await databases.getDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            "conversations",
            conversationId
        )
    } catch (err) {
        // LOG ERROR FETCHING CONVERSATION
        console.log(`Error getting conversation: ${err.message}`);

        throw err; // THROW ERROR TO ERROR BOUNDARY
    }
    // RETURN DATA OBJECT CONTAINING USER AND CONVERSATION DATA
    return data;
};

export default conversationLoader;