"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedFeature({ i,children }) {
    const ref = useRef();
    const isInView = useInView(ref, { once: true });
    return (
        <motion.li
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.2 }}>
            {children}
        </motion.li>
    );
}