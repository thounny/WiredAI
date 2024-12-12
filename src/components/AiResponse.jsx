// NODE MODULES
import PropTypes from "prop-types";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { hopscotch, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

// COMPONENTS


// ASSETS
import { iconLogo } from "../assets/assets";



const AiResponse = ({ aiResponse, children }) => {

    // FUNCTION EXECUTES FOR EVERY CODE TAG
    const code = ({ children, className, ...rest }) => {
        const match = className?.match(/language-(\w+)/);

        return match ? (
            <>
                <div className="code-block">
                    <div className="">{match[0]}</div>

                    <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    language={match[1]}
                    style={hopscotch}
                    customStyle={{
                        marginBlock: "0",
                        padding: "2px",
                    }}
                    codeTagProps={{
                        style: {
                            padding: "14px",
                            fontWeight: "600",
                        },
                    }}
                    >
                        {children}
                    </SyntaxHighlighter>
                </div>

                <div className="">
                    <p>
                        Use code
                        <a 
                            className="link ms-2"
                            href="https://gemini.google.com/faq#coding"
                            target="_blank"
                            >
                                with caution.
                        </a>
                    </p>
                </div>
            </>
        ) : (
            <code className={className}>{children}</code>
        )
    };

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

    <div className="markdown-content">
            <Markdown remarkPlugins={[remarkGfm]} 
            components={{ code }}>
                {aiResponse}
            </Markdown>
        </div>
    </div>
  )
}

AiResponse.propTypes = {
  aiResponse: PropTypes.string,
  children: PropTypes.any,
}

export default AiResponse