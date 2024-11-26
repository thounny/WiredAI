// NODE MODULES
import { redirect } from "react-router-dom";

// CUSTOM MODULES
import { account } from "../../lib/appwrite";

// LOGIN ACTION
const loginAction = async ({ request }) => {
    // RETRIEVE DATA
    const formData = await request.formData();
    // CREATE SESSION
    try {
        await account.createEmailPasswordSession(
            formData.get("email"),
            formData.get("password")
        );

        // REDIRECT TO HOME PAGE IF SUCCESSFUL
        return redirect("/");
    } catch (err) {
        // RETURN ERROR MESSAGE
        return { 
            message: err.message 
        };
    }
}

export default loginAction;