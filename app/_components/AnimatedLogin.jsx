"use client"
import { motion } from "framer-motion"

export default function AnimatedLogin({ children }) {
    return (
        <motion.div initial={{opacity:0,x:-800}} animate={{opacity:1,x:0}} transition={{delay:0.5}}>
            {children}
        </motion.div>
    )
}