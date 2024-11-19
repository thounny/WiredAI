// NODE MODULES
import PropTypes from "prop-types";

// Circular Progress Bar
const CircularProgress = ({classes = '', size = ''}) => {
    return (
        <div role="progressbar" 
        className={`circular-progress ${classes} ${size}`}>

        </div>
    )
};

CircularProgress.propTypes = {
    classes: PropTypes.string,
    size: PropTypes.string,
};

export default CircularProgress;