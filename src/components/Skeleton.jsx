// NODE MODULES
import { motion } from "framer-motion";
import React from "react";

const Skeleton = () => {
    const skeletonLines = [1, 2, 3];

    // Defines Framer Motion Variants
    const skeletonVariant = {
        start: { opacity: 0 },
        end: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const skeletonChildVariant = {
        start: { opacity: 0.5 },
        end: { opacity: 1 },
    };

    return (
        <motion.div
            variants={skeletonVariant}
            initial="start"
            animate="end"
            className="skeleton-container"
        >
            {skeletonLines.map((item) => (
                <motion.div
                    key={item}
                    className="skeleton"
                    variants={skeletonChildVariant}
                    transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 0.5,
                        ease: "easeOut",
                    }}
                />
            ))}
        </motion.div>
    );
};

export default Skeleton;
