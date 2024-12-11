// NODE MODULES
import { motion } from "framer-motion"
import { useLoaderData } from "react-router-dom"

// COMPONENTS
import PageTitle from "../components/PageTitle"

const Conversation = () => {
    const { conversation: {title, chats },
 } = useLoaderData() || {};
    
  return (
    <>
        {/* Meta Title */}
        <PageTitle title={`${title} | WiredAI`} />
    </>
  )
}

export default Conversation