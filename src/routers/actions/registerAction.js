// CUSTOM MODULES
import { account } from "../../lib/appwrite";
import generateID from "../../utils/generateID";

// REGISTER ACTION
const registerAction = async ({ request }) => {
  // RETRIEVE DATA
  const formData = await request.formData();

  try {
    // CREATE USER
    await account.create(
      generateID(), // GENERATES UNIQUE ID
      formData.get("email"),
      formData.get("password"),
      formData.get("name")
    );

    // SUCCESS MESSAGE
    return {
      success: true,
      message: "User registered successfully!",
    };
  } catch (err) {
    if (err.code === 409) {
      // HANDLE EMAIL ALREADY EXISTS
      return {
        success: false,
        message: "A user with this email already exists. Please try logging in.",
      };
    }

    // HANDLE OTHER ERRORS
    return {
      success: false,
      message: `An error occurred: ${err.message}`,
    };
  }
};

export default registerAction;
