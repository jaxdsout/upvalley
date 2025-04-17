import w3 from "../assets/d95fd3bdb487a9422716798f97117cdd.jpg"

function About () {

    return (
        <>
            <div className="w-full flex flex-col items-center bg-white">
                <img src={w3} alt="home-pane-3" className="object-cover max-h-[399px] w-full"/>
                <div className="py-8">
                    <h1 className="font-bold text-6xl text-center pt-4 pb-10">ABOUT US</h1>
                    <p className="text-center px-10">This is where we should put a short history of UpValley Electric, maybe a bio of owner.</p>
                    <br></br>
                    <br></br>
                    <h1 className="font-bold text-3xl text-center pt-4 pb-10">OUR SERVICES</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 px-10 mb-10">
                        <div className="px-10">
                            <h3 className="font-semibold text-center mb-1">New Construction & Remodel</h3>
                            <p className="indent-5">We provide expert electrical installation for new construction and remodeling projects, ensuring your systems are up to code, energy-efficient, and tailored to your specific needs. From custom homes to commercial spaces, our electricians deliver reliable and safe solutions from the ground up.</p>
                        </div>
                        <div className="px-10">
                            <h3 className="font-semibold text-center mb-1">Winery Refrigeration Wiring</h3>
                            <p className="indent-5">Specializing in winery refrigeration wiring, we design and install electrical systems that support precise climate control and cooling systems essential for wine production and storage. Trust us to power your winery with efficiency and reliability.</p>
                        </div>
                        <div className="px-10">
                            <h3 className="font-semibold text-center mb-1">Thermal Imaging</h3>
                            <p className="indent-5">Our thermal imaging services use infrared technology to detect electrical issues before they become costly problems. Identify hotspots, prevent equipment failure, and improve safety with our detailed thermal inspections.</p>
                        </div>
                        <div className="px-10">
                            <h3 className="font-semibold text-center mb-1">Service & Maintenance</h3>
                            <p className="indent-5">We offer comprehensive electrical service and maintenance to keep your systems running smoothly. From routine inspections to emergency repairs, our team ensures optimal performance and safety across residential, commercial, and industrial properties.</p>
                        </div>
                        <div className="px-10">
                            <h3 className="font-semibold text-center mb-1">Energy Efficiency</h3>
                            <p className="indent-5">Improve your energy usage with our electrical solutions designed to boost efficiency and reduce costs. We offer energy audits, LED lighting upgrades, smart system integrations, and more to help you save money and reduce your environmental footprint.</p>
                        </div>
                        <div className="px-10">
                            <h3 className="font-semibold text-center mb-1">Voice & Data Cabling</h3>
                            <p className="indent-5">Our voice and data cabling services ensure fast, secure, and organized connectivity for homes and businesses. Whether it's a new installation or an upgrade, we provide structured cabling systems that support reliable communication networks.</p>
                        </div>
                      
                     
                    </div>
                </div>
               
            </div>
        </>
    )
}

export default About