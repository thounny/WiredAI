// CUSTOM MODULES
import { account } from "../../lib/appwrite";

const resetLinkAction = async ({ request }) => {
    const formData = await request.formData();

    const email = formData.get("email");

    try {
        // CREATE PASSWORD RECOVERY
        await account.createRecovery(email, `${location.origin}/reset-password`);

        return {
            ok: true,
            message: "Check your email to reset your password",
        };
    } catch (err) {
        // Log the error
        console.error(`Error creating password recovery: ${err.message}`);

        return {
            ok: false,
            message: err.message,
        };
    }
};

export default resetLinkAction;
