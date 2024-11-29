// NODE MODULES
import { redirect } from "react-router-dom";

// CUSTOM MODULES
import { account } from "../../lib/appwrite";

const resetPasswordLoader = async ({request}) => {
    const url = new URL(request.url);
    try {
        // RETRIEVE CURRENT USER ACCOUNT DATA
        await account.get();

        // ACCOUNT EXISTS, REDIRECT TO HOME PAGE
        return redirect("/");
        } catch (err) {
        console.log(`Error getting user session: ${err.message}`);
        return null;
    }
    if(!url.searchParams.get("userId") && !url.searchParams.get("secret")) {
        return redirect("/reset-link");
    }

    return null;
}

export default resetPasswordLoader;