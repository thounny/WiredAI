// NODE MODULES
import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";

// CUSTOM HOOK TO PRELOAD USER PROMPT
const usePromptPreloader = () => {
    // GET NAVIGATION STATE
    const navigation = useNavigation();

    // STATE TO STORE PROMPT PRELOADER VALUE
    const [promptPreloaderValue, setPromptPreloaderValue]
     = useState("");

     useEffect(() => {
        // IF FORM DATA EXISTS, GET USER PROMPT AND UPDATE
        if(navigation.formData) {
            setPromptPreloaderValue(navigation.formData.get("user_prompt"));
        } else {
            // IF FORM DATA DOES NOT EXIST, SET TO EMPTY STRING
            setPromptPreloaderValue("");
        }
    }, [navigation]); // RUN ONLY WHEN NAVIGATION STATE CHANGES

    return { promptPreloaderValue }
};

export { usePromptPreloader }