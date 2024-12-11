// NODE MODULES

import { redirect } from "react-router-dom";

// CUSTOM MODULES
import { account } from "../../lib/appwrite";

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

    return data;
}

export default appLoader;