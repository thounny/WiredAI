// NODE MODULES
import PropTypes from "prop-types";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { hopscotch, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState, useEffect } from "react";

// COMPONENTS
import { IconBtn } from "./Button";

// ASSETS
import { iconLogo } from "../assets/assets";

// CUSTOM MODULES
import toTitleCase from "../utils/toTitleCase";



const AiResponse = ({ aiResponse, children }) => {

    // INITIALIZE CODE THEME STATE TO EMPTY STRING
    const [codeTheme, setCodeTheme] = useState("");

    // USE EFFECT TO DETECT USER'S PREFERRED CODE THEME
    useEffect(() => {
        // CREATE MEDIA QUERY TO DETECT USER'S PREFERRED CODE THEME
        const mediaQuery = window.matchMedia
        ('(prefers-color-scheme: dark)');

        // INITIALLY SET CODE THEME BASED ON CURRENT MEDIA QUERY
        setCodeTheme(mediaQuery.matches ? hopscotch : coy);
    }, []);

    // FUNCTION EXECUTES FOR EVERY CODE TAG
    const code = ({ children, className, ...rest }) => {
        const match = className?.match(/language-(\w+)/);

        return match ? (
            <>
                <div className="code-block">
                    <div className="p-4 pb-0 font-sans">
                        {toTitleCase(match[1])}</div>

                    <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    language={match[1]}
                    style={codeTheme}
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

                <div className="bg-light-surfaceContainer
                 dark:bg-dark-surfaceContainer rounded-t-extraSmall
                 rounded-b-medium flex justify-betwen items-center
                 h-11 font-sans text-bodyMedium ps-4 pe-2">
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

                    <IconBtn 
                        icon="content_copy"
                        size="small"
                        title="Copy code"
                    />

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