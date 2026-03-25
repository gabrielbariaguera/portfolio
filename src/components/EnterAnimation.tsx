import { motion } from "framer-motion"
import type { ReactNode } from "react"

type Props = { children: ReactNode; className?: string}

export default function EnterAnimation({children, className}: Props){
    return(
        <motion.div
            className={className}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.7, bounce: 0.2 },
            }}
        >
            {children}
        </motion.div>        
    )
}