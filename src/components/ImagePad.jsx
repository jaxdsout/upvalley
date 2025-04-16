import { AnimatePresence, motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function ImagePad ({ children, name, images }) {
    const [openProj, setOpenProJ] = useState(false);

    const handleProject = () => setOpenProJ(prev => !prev)

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setOpenProJ(false);
            }
        };
        
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);


    return (
        <>
        <motion.div 
            className="relative bg-gray-500 flex flex-col items-center justify-center rounded-lg w-[250px] h-[250px] m-3 overflow-hidden active:translate-y-1 drop-shadow-lg"
            onClick={handleProject}
        >
            <h1 className="relative font-bold text-5xl text-center pt-5 pb-10 px-3 text-white" style={{ zIndex: 3}}>{name}</h1>
            <img src={images[0]} alt="pad-header" style={{ zIndex: 2}} className="absolute top-0 h-full object-cover hover:opacity-60"/>
            {children}
        </motion.div>
        <AnimatePresence>
        {openProj && (
            <motion.div
                className="fixed top-0 left-0 overflow-y-auto h-screen"
                style={{ zIndex: 4 }}
                onClick={handleProject}
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                exit={{ y: 300 }}
                transition={{ duration: 0.4, bounce: 0.5 }}

            >
                <svg width="36" height="36" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleProject} className="fixed left-10 top-10">
                    <path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="rgba(255, 255, 255, 0.7)" stroke="10" strokeWidth="20" clip-rule="evenodd" className="hover:fill-white"></path>
                </svg>
                <div className="p-5 bg-white rounded-lg">
                    {images.map((image, idx) => (
                        <img key={idx} src={image} alt="image" />
                    ))}
                </div>

            </motion.div>
        )}
        </AnimatePresence>
       
        </>
        
    )
}