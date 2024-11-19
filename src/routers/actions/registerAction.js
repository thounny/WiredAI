// NODE MODULES
import { redirect } from "react-router-dom";

// CUSTOM MODULES
import { account } from "../../lib/appwrite";
import generateID from "../../utils/generateID";



// REGISTER ACTION
const registerAction = async ({ request }) => {
  // RETRIEVE DATA
  const formData = await request.formData();

  try {
    // CREATE ACCOUNT
    await account.create(
        generateID(), // GENERATE UNIQUE ID
        formData.get("email"), // EMAIL
        formData.get("password"), // PASSWORD
        formData.get("name") // NAME
    )
  } catch (err) {
    return {
        message: err.message, 
    };
  }

// AFTER ACCOUNT CREATION, REDIRECT TO HOME PAGE
try {
    // CREATE SESSION FOR NEW USER
    await account.createEmailPasswordSession(
        formData.get("email"), // EMAIL
        formData.get("password"), // PASSWORD
    );
} catch (err) {
    console.log(`Error creating email password session: ${err.message}`);
    return redirect("/login");
}

// SUCCESSFUL REGISTRATION, REDIRECT TO HOME PAGE
  return redirect("/");
};

export default registerAction;