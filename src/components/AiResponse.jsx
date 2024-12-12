// NODE MODULES
import PropTypes from "prop-types";

// ASSETS
import { iconLogo } from "../assets/assets";

const AiResponse = ({ aiResponse, children }) => {
  return (
    <div className="grid grid-cols-1 items-start gap-1 py-4 
    md:grid-cols-[max-content,minmax(0,1fr)]
    md:gap-5">
        <figure className="w-8 h-8 
        grid place-items-center">
            <img 
                src={iconLogo} 
                width={32} 
                height={32}
                alt="WiredAI logo" 
            />
        </figure>

        {children}

    <div className="markdown-content">{aiResponse}</div>
    </div>
  )
}

AiResponse.propTypes = {
  aiResponse: PropTypes.string,
  children: PropTypes.any,
}

export default AiResponse