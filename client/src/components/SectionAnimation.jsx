import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const animationVariants = {
    fadeUp: {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
    zoomIn: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
};

export default function Section({ children, animation = "fadeUp", duration=0.6, delay=0, threshold=0.4 }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold, });

    return (
        <motion.div
            ref={ref}
            initial="hidden" //starts invisible
            animate={inView ? "visible" : "hidden"} //animate and turn visible at the right position
            variants={animationVariants[animation]} //choose the animation
            transition={{ duration, delay }}
        >
            {children}
        </motion.div>
    );
}