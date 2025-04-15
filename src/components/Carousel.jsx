import { pre } from "framer-motion/client";
import b1 from "../assets/455a9d0f85df81fcf8dc65019d274e4d.jpg"
import b2 from "../assets/a8472ad2b5b3598dd3b576abff796d7b.jpg"
import b3 from "../assets/eea55edc3749f89aa2c23cf508e55615.jpg"
import { useEffect, useState } from "react";
import { motion, AnimatePresence} from "framer-motion"
const backgrounds = [b1, b2, b3];

export default function Carousel () {
    const [index, setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);

    const isFirst = prevIndex === null;

    useEffect(() => {
        const prevInterval = setInterval(() => {
            setPrevIndex(index);
        }, 4000);

        const interval = setInterval(() => {
          setIndex((prev) => (prev + 1) % backgrounds.length);
        }, 4100);
    
        return () => {
            clearInterval(interval);
            clearInterval(prevInterval)
        }
      }, [index]);

    return (
        <div className="relative w-full h-[599px] overflow-hidden">
        <AnimatePresence mode="wait">
            {!isFirst && (
                <motion.img
                    key={`prev-${prevIndex}`}
                    src={backgrounds[prevIndex]}
                    alt="Previous"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ zIndex: 0 }}
                />
            )}
        </AnimatePresence>

            <motion.img
                key={`current-${index}`}
                src={backgrounds[index]}
                alt="Current"     
                initial={isFirst ? { opacity: 0, y: -100 } : { opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: 1 }}

            />

        </div>

    )
}