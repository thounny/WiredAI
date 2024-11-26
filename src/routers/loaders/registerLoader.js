// NODE MODULES
import { redirect } from "react-router-dom";

// CUSTOM MODULES
import { account } from "../../lib/appwrite";

const registerLoader = async () => {
    try {
        // RETRIEVE CURRENT USER ACCOUNT DATA
        const user = await account.get();
        console.log(user);
    } catch (err) {
        console.log(`Error getting user session: ${err.message}`);
        return null;
    }

    return redirect("/");
}

export default registerLoader