// NODE MODULES
import PropTypes from "prop-types";
import { motion } from "framer-motion";

// Circular Progress Bar
const CircularProgress = ({ classes, size }) => {
    return (
        <div 
            role="progressbar"
            aria-valuemin="0" 
            aria-valuemax="100"
            className={`circular-progress ${classes} ${size}`}>
        </div>
    );
};

CircularProgress.propTypes = {
    classes: PropTypes.string,
    size: PropTypes.string,
};

CircularProgress.defaultProps = {
    classes: '',
    size: '',
};

// LINEAR PROGRESS
const LinearProgress = ({ classes }) => {
    // DEFINE FRAMER MOTION VARIANTS
    const progressbarVariant = {
        start: { scaleY: 0 },
        end: {
            scaleY: 1,
            transition: {
                when: "beforeChildren",
                duration: 0.2,
                ease: "easeOut",
                delay: 0.5,
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                duration: 0.1,
                ease: "easeOut",
            },
        },
    };

    const activeIndicatorVariant = {
        start: { translateX: "-100%" },
        end: { translateX: "100%" },
    };

    return (
        <motion.div 
            role="progressbar"
            aria-valuemin="0" 
            aria-valuemax="100"
            variants={progressbarVariant}
            initial="start"
            animate="end"
            exit="exit"
            className={`linear-progress ${classes}`}>
            <motion.div 
                variants={activeIndicatorVariant} 
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                }}
                className="active-indicator">
            </motion.div>
        </motion.div>
    );
};

LinearProgress.propTypes = {
    classes: PropTypes.string,
};

LinearProgress.defaultProps = {
    classes: '',
};

export { CircularProgress, LinearProgress };
