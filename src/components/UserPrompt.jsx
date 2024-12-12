// NODE MODULES
import PropTypes from "prop-types"
import { useLoaderData } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

// COMPONENTS
import Avatar from "./Avatar";
import { IconBtn } from "./Button";

// CUSTOM MODULES
import { useToggle } from "../hooks/useToggle";

const UserPrompt = ({text}) => {
    // RETRIEVE USER DATA FROM LOADER HOOK

const { user } = useLoaderData();

// USETOGGLE HOOK TO MANAGE EXPANDED STATE OF USER PROMPT
const [isExpanded, toggleExpand] = useToggle();

// CREATE A REF TO ACCESS TEXT BOX ELEMENT IN DOM
const textBoxRef = useRef();

// INITIALIZE HASMORECONTENT STATE, INDICATING IF TEXTBOX HAS MORE CONTENT (MORE HEIGHT)
    const [hasMoreContent, setMoreContent] = useState(false);

// USE EFFECT TO UPDATE HASMORECONTENT STATE BASED ON TEXTBOX HEIGHT
useEffect(() => {
    setMoreContent(
        textBoxRef.current.scrollHeight > textBoxRef.current.clientHeight,
    )
}, [textBoxRef]);

return (
    <div className="grid grid-cols-1 items-center gap-1
    py-4 md:grid-cols-[max-content,minmax(0,1fr),max-content]
    md:gap-5">
        <Avatar name={user?.name} />

        <p className={`text-bodyLarge pt-1 
        whitespace-pre-wrap 
        ${!isExpanded ? "line-clamp-4" : ""}`}
        ref={textBoxRef}
        >
            {text}
            </p>
            
            { hasMoreContent && (
                    <IconBtn icon={isExpanded ? 
                    "keyboard_arrow_up" : "keyboard_arrow_down"}
                    onClick={toggleExpand}
                    title={isExpanded ? "Collapse text" : "Expand text"}
                />
            )}
    </div> 
  )
}

UserPrompt.propTypes = {
    text: PropTypes.string,
};

export default UserPrompt