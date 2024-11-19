// CUSTOM MODULES
import { account } from "../lib/appwrite";

// REGISTER ACTION
const registerAction = aysnc ({request}) => {
    // RETRIEVE DATA
    const formData = await request.formData();
    console.dir(formData);
    return null;
};

export default registerAction;