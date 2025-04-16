
import w1 from "../assets/8e080d9aec56de36e99359e9995e9606.jpg"
import w2 from "../assets/5cb57ed69c2ddbbd3f496483c46e3a1d.jpg"
import w3 from "../assets/d95fd3bdb487a9422716798f97117cdd.jpg"
import { motion } from "framer-motion"
import Wedge from "../components/Wedge"
import Carousel from "../components/Carousel"



function Home () {
    return (
        <div className="flex flex-col items-center justify-start">
            <div className="w-full order-1">  
                <Carousel />
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
            <Wedge from='right'>
                <img src={w1} alt="home-pane-1" className="object-cover"/>
                <div className="px-6 py-14 sm:py-6 bg-[#FFFFFC] text-center flex flex-col items-center justify-center inner-shadow">
                    <p>At UpValley Electric Inc. we do our very best to cover all of your electrical needs. We pride ourselves on servicing wineries in addition to residential & commercial electrical work. 
                    </p>
                </div>
            </Wedge>
            <Wedge from='left'>
                <div className="bg-[#ebc694] flex flex-col items-center justify-center order-last sm:order-first inner-shadow px-6 py-14 sm:py-6">
                    <h1 className="text-lg font-bold tracking-wider mb-2">SERVICES</h1>
                    <ul className="text-base grid grid-cols-2 gap-x-3 gap-y-2 text-center">
                        <li>New Construction & Remodel</li>
                        <li>Winery Refigeration Wiring</li>
                        <li>Thermal Imaging</li>
                        <li>Service & Maintenance</li>
                        <li>Energy Efficiency</li>
                        <li>Voice and Data Cabling</li>
                    </ul>
                </div>
                <img src={w2} alt="home-pane-2" className="object-cover h-full"/>
            </Wedge>
            <Wedge from='right'>
                <img src={w3} alt="home-pane-3" className="object-cover"/>
                <div className="px-6 py-14 sm:py-6 bg-[#FFFFFC] text-center flex flex-col items-center justify-center  inner-shadow">
                    <p>There is never a job that is too big or too small for us. When you contact us, you can be sure that you are going to be met with a friendly, professional, and knowledgeable staff member.</p>
                </div>
            </Wedge>
        </div>
    )
}

export default Home

