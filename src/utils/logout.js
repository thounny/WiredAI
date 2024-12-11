// CUSTOM MODULES
import { account } from "../lib/appwrite";

// LOGOUT USER
const logout = async (navigate) => {
    try {
    await account.deleteSession("current");
} catch (err) {
    return console.log(`Error deleting session: ${err.message}`);
}

return navigate("/login");
};

export default logout;