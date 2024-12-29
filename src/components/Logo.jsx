// NODE MODULES
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// ASSETS
import Lain from "../assets/lain2.gif"

const Logo = ({classes = ""}) => {
    return (
        <Link 
            to="/" 
            className={`min-w-max max-w-max h-[24px] ${classes}`}
            >
                <img 
                src={Lain} 
                width={133} 
                height={24} 
                alt="WiredAI logo" 
                className="dark:hidden" 
                />

                <img 
                src={Lain} 
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