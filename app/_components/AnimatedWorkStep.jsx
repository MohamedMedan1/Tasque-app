"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedWorkStep({i,children}) {
    const ref = useRef();
    const isInView = useInView(ref, { once: true,amount:0.1 });

    return (
        <motion.li
            ref={ref}
            initial={{opacity:0,x:-100,y:-100}}
            animate={isInView?{opacity:1,x:0,y:0}:{} }
            transition={{ delay: i * 0.2 }}>
        {children}
        </motion.li>
    );
}