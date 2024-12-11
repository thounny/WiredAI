// NODE MODULES
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// ASSETS
import { logoLight, logoDark } from "../assets/assets";

const Logo = ({classes = ""}) => {
    return (
        <Link 
            to="/" 
            className={`min-w-max max-w-max h-[24px] ${classes}`}
            >
                <img 
                src={logoLight} 
                width={133} 
                height={24} 
                alt="WiredAI logo" 
                className="dark:hidden" 
                />

                <img 
                src={logoDark} 
                width={133} 
                height={24} 
                alt="WiredAI logo" 
                className="hidden dark:block" 
                />
            </Link>
    )
}

Logo.propTypes = {
    classes: PropTypes.string,
}

export default Logo;