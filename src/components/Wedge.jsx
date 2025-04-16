import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"


export default function Wedge({ children , from = 'right' }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView]) 


    return (
        <motion.div
            className="min-h-[150px] order-3 grid grid-cols-1 sm:grid-cols-2 w-full"
            variants={{
                left: { x: -100, opacity: 0},
                right: {x: 100, opacity: 0},
                visible: { x: 0, opacity: 1}
            }}
            initial={from === 'left' ? 'left': 'right'}
            animate={mainControls}
            transition={{ duration: 1, delay: 0.25 }}
            ref={ref}
        >
            {children}
        </motion.div>
    )

}