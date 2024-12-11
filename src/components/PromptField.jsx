// NODE MODULES
import { motion } from "framer-motion";

// COMPONENTS
import { IconBtn } from "./Button";

const PromptField = () => {
  return (
    <motion.div className="prompt-field-container">
        <motion.div 
            className="prompt-field"
            contentEditable={true}
            role="textbox"
            aria-multiline={true}
            aria-label="Enter your prompt here"
            data-placeholder="Enter your prompt here"
        />

        <IconBtn 
            icon="send" 
            title="Submit" 
            size="large" 
            classes="ms-auto" 
        />

        <div className="state-layer"></div>
    </motion.div>
  )
}

export default PromptField