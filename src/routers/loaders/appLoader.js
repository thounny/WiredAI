// NODE MODULES

import { redirect } from "react-router-dom";
import { Query } from "appwrite";

// CUSTOM MODULES
import { account, databases } from "../../lib/appwrite";

const appLoader = async () => {
    const data = {};
    try {
        // RETRIEVE CURRENT USER ACCOUNT DATA
        data.user = await account.get();
    } catch (err) {
        console.log(`Error getting user session: ${err.message}`);
        
        // REDIRECT TO LOGIN PAGE
        return redirect("/login");
    }

    try {
        data.conversations = await databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            "conversations",
            [
                Query.select(["$id", "title"]),
                Query.orderDesc("$createdAt"),
                Query.equal("user_id", data.user.$id),
            ]
        );
    } catch (err) {
        console.log(`Error getting user conversations: ${err.message}`);
    }

    return data;
}

export default appLoader;