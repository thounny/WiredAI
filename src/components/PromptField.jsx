// NODE MODULES
import { motion, stagger } from "framer-motion";
import { useRef, useCallback, useState } from "react";

// COMPONENTS
import { IconBtn } from "./Button";

const PromptField = () => {

    // INPUTFIELD AND INPUTFIELD CONTAINER HOLD REFERENCES TO DOM ELEMENTS
    const inputField = useRef();
    const inputFieldContainer = useRef();

    // STATE TO DETERMINE IF PLACEHOLDER SHOULD BE SHOWN
    const [placeholderShown, setPlaceholderShown] = useState(true);
    const [isMultiline, setIsMultiline] = useState(false);
    const [inputValue, setInputValue] = "";

    // HANDLE INPUT FIELD INPUT CHANGE
    const handleInputChange = useCallback(() => {
        if (inputField.current.innerText === "\n") inputField.current.innerText = "";

        setPlaceholderShown(!inputField.current.innerText);
        setIsMultiline(inputFieldContainer.current.clientHeight > 64);
        setInputValue(inputField.current.innerText.trim());
    }, []);

    // MOVE CURSOR TO THE END OF THE INPUT FIELD
    const moveCursorToEnd = useCallback(() => {
        const editableElem = inputField.current;
        const range = document.createRange();
        const selection = window.getSelection();

        // SET RANGE TO LAST CHILD OF INPUT FIELD
        range.selectNodeContents(editableElem);
            // COLLAPSE RANGE TO END
        range.collapse(false);
        
        // CLEAR EXISTING SELECTION AND ADD NEW RANGE
        selection.removeAllRanges();
        selection.addRange(range);
    }, []);

    // HANDLE PASTED TEXT
    const handlePaste = useCallback(
        (e) => {
            e.preventDefault();
            inputField.current.innerText += e.clipboardData.getData("text");
            handleInputChange();
            moveCursorToEnd();
        }, 
    [handleInputChange, moveCursorToEnd],
);

    // FRAMER MOTION VARIANTS FOR PROMPT FIELD ANIMATION
    const promptFieldVariant = {
        hidden: { scaleX: 0},
        visible: {
            scaleX: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
                duration: 0.4,
                ease: [0.05, 0.7, 0.1, 1]
            }
        },
    };

    // FRAMER MOTION VARIANTS FOR PROMPT FIELD CONTAINER ANIMATION
    const promptFieldChildrenVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

return (
    <motion.div 
    className={`prompt-field-container ${isMultiline ? "rounded-large" : ""}`}
    variants={promptFieldVariant}
    initial="hidden"
    animate="visible"
    ref={inputFieldContainer}
    >
        <motion.div 
            className={`prompt-field ${placeholderShown ? "" : "after:hidden"}`}
            contentEditable={true}
            role="textbox"
            aria-multiline={true}
            aria-label="Enter your prompt here"
            data-placeholder="Enter your prompt here"
            variants={promptFieldChildrenVariant}
            ref={inputField}
            onInput={handleInputChange}
            onPaste={handlePaste}
        />

        <IconBtn 
            icon="send" 
            title="Submit" 
            size="large" 
            classes="ms-auto" 
            variants={promptFieldChildrenVariant}
        />

        <div className="state-layer"></div>
    </motion.div>
  )
}

export default PromptField