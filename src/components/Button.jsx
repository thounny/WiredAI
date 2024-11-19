// NODE MODULES
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

export {Button};