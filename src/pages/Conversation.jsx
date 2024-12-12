// NODE MODULES
import { motion } from "framer-motion"
import { useLoaderData, useLocation } from "react-router-dom"

// COMPONENTS
import PageTitle from "../components/PageTitle"
import UserPrompt from "../components/UserPrompt"
import AiResponse from "../components/AiResponse"
import PromptPreloader from "../components/PromptPreloader"

// CUSTOM HOOKS
import { usePromptPreloader } from "../hooks/userPromptPreloader"


const Conversation = () => {
    const { conversation: {title, chats },
 } = useLoaderData() || {};

 // RETRIEVE PROMPT PRELOADER VALUE FROM CUSTOM HOOK
 const { promptPreloaderValue } = usePromptPreloader();

//  OBTAIN CURRENT URL LOCATION USING LOCATION HOOK
    const location = useLocation();
    
  return (
    <>
        {/* Meta Title */}
        <PageTitle title={`${title} | WiredAI`} />

        <motion.div className="max-w-[700px] mx-auto !will-change-auto" 
        initial={!location.state?._isRedirect && { opacity: 0 }} 
        animate={{opacity: 1}}
        transition={{  duration: 0.2, delay: 0.05, ease: "easeOut" }}
        >
            {chats.map((chat) => (
                <div key={chat.$id}>
                    {/* USER PROMPT */}
                    <UserPrompt text={chat.user_prompt} />
                
                {/* AI RESPONSE */}
                <AiResponse aiResponse={chat.ai_response} />
                </div>
            ))}
        </motion.div>

        {/* USER PROMPT PRELOADER */}
        {promptPreloaderValue && (
        <PromptPreloader promptValue={ promptPreloaderValue }/>
        )}
    </>
  )
}

export default Conversation