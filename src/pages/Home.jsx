import b1 from "../assets/455a9d0f85df81fcf8dc65019d274e4d.jpg"
import b2 from "../assets/a8472ad2b5b3598dd3b576abff796d7b.jpg"
import b3 from "../assets/eea55edc3749f89aa2c23cf508e55615.jpg"
import w1 from "../assets/8e080d9aec56de36e99359e9995e9606.jpg"
import w2 from "../assets/5cb57ed69c2ddbbd3f496483c46e3a1d.jpg"
import w3 from "../assets/d95fd3bdb487a9422716798f97117cdd.jpg"
import { useState, useEffect, useRef } from "react"
import { motion, useInView, useAnimationControls } from "framer-motion"

const backgrounds = [b1, b2, b3];

function Home () {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [carousel, setCarousel] = useState(0);

    useEffect(() => {
        console.log(isInView)
    }, [isInView])

    useEffect(() => {
        const interval = setInterval(() => {
          setCarousel((prev) => (prev + 1) % backgrounds.length);
        }, 9000);
      
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-start">
            <div className="w-full order-1">  
                <motion.img          
                    variants={{
                        hidden: { opacity: 0, y: -75},
                        visible: { opacity: 1, y: 0}
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.25 }}
                    src={backgrounds[carousel]} 
                    alt='Gallery' 
                    className="object-cover min-h-[599px] max-h-[700px] w-full"
                />
                <motion.h1 
                    className="text-center text-white tracking-wider font-black text-xl sm:text-3xl bg-black px-20 py-13 drop-shadow-lg"
                    variants={{
                        hidden: { y: 75},
                        visible: { y: 0}
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                        SERVING NAPA VALLEY FOR OVER 20 YEARS
                </motion.h1>
            </div>
            <div className="w-full order-2 grid grid-cols-1 sm:grid-cols-2">
                <img src={w1} alt="home-pane-1" className="object-cover"/>
                <div className="px-6 py-14 sm:py-6 bg-[#FFFFFC] text-center flex flex-col items-center justify-center text-sm inner-shadow">
                    <p>At UpValley Electric Inc. we do our very best to cover all of your electrical needs. We pride ourselves on servicing wineries in addition to residential & commercial electrical work. 
                    </p>
                </div>
             
            </div>
            <div className="w-full order-3 grid grid-cols-1 sm:grid-cols-2">
                <div className="bg-[#C8AB83] flex flex-col items-center justify-center order-last sm:order-first inner-shadow px-6 py-14 sm:py-6">
                    <h1 className="text-lg font-bold tracking-wider mb-2">SERVICES</h1>
                    <ul className="text-sm grid grid-cols-2 gap-x-3 gap-y-2 text-center">
                        <li>New Construction & Remodel</li>
                        <li>Winery Refigeration Wiring</li>
                        <li>Thermal Imaging</li>
                        <li>Service & Maintenance</li>
                        <li>Energy Efficiency</li>
                        <li>Voice and Data Cabling</li>
                    </ul>
                </div>
                <img src={w2} alt="home-pane-2" className="object-cover"/>

            </div>
            <div className="w-full order-4 grid grid-cols-1 sm:grid-cols-2">
                <img src={w3} alt="home-pane-3" className="object-cover"/>
                <div className="px-6 py-14 sm:py-6 bg-[#FFFFFC] text-center flex flex-col items-center justify-center text-sm inner-shadow">
                    <p>There is never a job that is too big or too small for us. When you contact us, you can be sure that you are going to be met with a friendly, professional, and knowledgeable staff member.</p>
                </div>
            
            </div>
        </div>
    )
}

export default Home

