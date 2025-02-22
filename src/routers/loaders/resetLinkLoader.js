// NODE MODULES
import { redirect } from "react-router-dom";

// CUSTOM MODULES
import { account } from "../../lib/appwrite";

const resetLinkLoader = async () => {
    try {
        // RETRIEVE CURRENT USER ACCOUNT DATA
        await account.get();
        } catch (err) {
        console.log(`Error getting user session: ${err.message}`);
        return null;
    }

    return redirect("/");
}

export default resetLinkLoader;