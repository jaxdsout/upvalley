import b1 from "../assets/455a9d0f85df81fcf8dc65019d274e4d.jpg"
import b2 from "../assets/a8472ad2b5b3598dd3b576abff796d7b.jpg"
import b3 from "../assets/eea55edc3749f89aa2c23cf508e55615.jpg"
import w1 from "../assets/8e080d9aec56de36e99359e9995e9606.jpg"
import w2 from "../assets/5cb57ed69c2ddbbd3f496483c46e3a1d.jpg"
import w3 from "../assets/d95fd3bdb487a9422716798f97117cdd.jpg"
import { useState, useEffect } from "react"

const workers = [w1, w2, w3];
const backgrounds = [b1, b2, b3];

function Home () {
    const [carousel, setCarousel] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCarousel((prev) => (prev + 1) % backgrounds.length);
        }, 9000);
      
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="w-full">
                <img src={backgrounds[carousel]} alt='Gallery' className="min-h-[350px] max-h-[500px] w-full object-cover"/>
            </div>
            <div className="flex flex-col items-center justify-center inner-shadow drop-shadow-180 w-screen">
                <div className="w-full text-center bg-[#f87f23] py-13 px-8 drop-shadow-lg">
                    <h1 className="text-white tracking-wider font-black text-xl sm:text-3xl">SERVING NAPA VALLEY FOR OVER 20 YEARS</h1>
                </div>
                <div className="w-full flex flex-row h-[300px]">
                    <img src={w1} alt="home-pane-1" className="w-1/2 object-cover"/>
                    <div className="bg-[#ececec] w-1/2">
                        <p className="px-14 py-6">At UpValley Electric Inc. we do our very best to cover all of your electrical needs. We pride ourselves on servicing wineries in addition to residential & commercial electrical work. 
                        </p>
                    </div>
                </div>
                <div className="w-full flex flex-row h-[300px]">
                    <div className="bg-[#ececec] w-1/2 flex flex-col items-center justify-center px-4 ">
                    <h1 className="text-xl font-bold tracking-wider mb-2">SERVICES</h1>
                    <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-center">
                        <li>New Construction & Remodel</li>
                        <li>Winery Refigeration Wiring</li>
                        <li>Thermal Imaging</li>
                        <li>Service & Maintenance</li>
                        <li>Energy Efficiency</li>
                        <li>Voice and Data Cabling</li>
                    </ul>
                    </div>
                    <img src={w2} alt="home-pane-1" className="w-1/2 object-cover"/>
                </div>
                <div className="w-full flex flex-row h-[300px]">
                    <img src={w3} alt="home-pane-1" className="w-1/2 object-cover"/>
                    <div className="bg-[#ececec] w-1/2 px-4 py-13">
                        <p>There is never a job that is too big or too small for us. When you contact us, you can be sure that you are going to be met with a friendly, professional, and knowledgeable staff member.</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Home

