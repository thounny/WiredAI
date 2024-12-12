// NODE MODULES
import { motion } from "framer-motion"
import { useLoaderData } from "react-router-dom"

// COMPONENTS
import PageTitle from "../components/PageTitle"
import UserPrompt from "../components/UserPrompt"
import AiResponse from "../components/AiResponse"

const Conversation = () => {
    const { conversation: {title, chats },
 } = useLoaderData() || {};
    
  return (
    <>
        {/* Meta Title */}
        <PageTitle title={`${title} | WiredAI`} />

        <motion.div className="max-w-[700px] mx-auto !will-change-auto" 
        initial={{ opacity: 0 }} 
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
    </>
  )
}

export default Conversation