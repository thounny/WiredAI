// NODE MODULES
import { button } from "framer-motion/client";
import PropTypes from "prop-types";

// BUTTON COMPONENT
const Button = ({
    classes = "",
    variant = "filled",
    color = "primary",
    children,
    ...rest
}) => {
    return (
        <button className={`btn ${variant} ${color} ${classes}`}
        {...rest}
        >
            {children}
            <div className="state-layer"></div>
        </button>
    )
}

Button.propTypes = {
    classes: PropTypes.string,
    variant: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.any,
}

// ICON BUTTON
const IconBtn = ({ classes = "", icon, size = "", children, ...rest }) => {
    return (
        <button className={`icon-btn ${size} ${classes}`} {...rest}>

            {children}

            {!children && (
                <span className={`material-symbols-rounded icon-${size}`}>
                    {icon}
                </span>
            )}

            <div className="state-layer"></div>
        </button>
    )
}

IconBtn.propTypes = {
    classes: PropTypes.string,
    icon: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.any,
}

export {Button, IconBtn};