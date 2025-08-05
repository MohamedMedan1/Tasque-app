"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedFeatures({ children }) {
    const ref = useRef()
    const isInView = useInView(ref, { once: true });
    return (
        <motion.ul ref={ref}
            initial={{ scale: 0, y: 100 }}
            animate={isInView ? { scale: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
            {children}
        </motion.ul>
    );
}