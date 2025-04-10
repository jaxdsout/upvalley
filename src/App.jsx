import { useState, useEffect } from "react";
import Logo from "./Logo"
import b1 from "./assets/455a9d0f85df81fcf8dc65019d274e4d.jpg"
import b2 from "./assets/a8472ad2b5b3598dd3b576abff796d7b.jpg"
import b3 from "./assets/eea55edc3749f89aa2c23cf508e55615.jpg"
import w1 from "./assets/8e080d9aec56de36e99359e9995e9606.jpg"
import w2 from "./assets/5cb57ed69c2ddbbd3f496483c46e3a1d.jpg"
import w3 from "./assets/d95fd3bdb487a9422716798f97117cdd.jpg"


const workers = [w1, w2, w3];
const backgrounds = [b1, b2, b3];

function App() {
  const [lightning, setLightning] = useState(true);
  const [sticky, setSticky] = useState(false);
  const [pusbBg, setPushBg] = useState(true);
  const [carousel, setCarousel] = useState(0)

  setTimeout(() => {
    setPushBg(false)
  }, 2100)

  setTimeout(() => {
    setSticky(true)
  }, 2100)

  setTimeout(() => {
    setLightning(false)
  }, 2500)

  useEffect(() => {
    const interval = setInterval(() => {
      setCarousel((prev) => (prev + 1) % backgrounds.length);
    }, 9000);
  
    return () => clearInterval(interval);
  }, []);



  return (
    <div className="relative flex flex-col items-center justify-start h-screen">
      <div
        className="bg-[#242424] w-full h-screen z-50"
        style={{ 
          position: "absolute",
          top: "0%",
          transform: `translateY(${pusbBg ? "0%" : "-100%"})`,
          transition: "transform 0.8s ease-in-out"
        }}
      >
        <div className="z-50 flex flex-col items-center justify-center"
          style={{
            position: "relative",
            transform: `translateY(${pusbBg ? "100%" : "-100%"})`,
            transition: "transform 2.4s ease-out"
          }}
        >
          {lightning && (
            <>
              <svg
              width="200px" height="200px" viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg" className='jolt drop-shadow z-50 mb-2'
            >
              <path
                d="M 8.6967 0.0404 C 8.9086 0.131 9.0311 0.3549 8.9931 0.5822 L 8.0902 6 H 12.4999 C 12.6893 6 12.8625 6.107 12.9472 6.2764 C 13.0318 6.4458 13.0136 6.6485 12.8999 6.8 L 6.9 14.8 C 6.7617 14.9844 6.5152 15.0503 6.3033 14.9596 C 6.0913 14.869 5.9689 14.6451 6.0068 14.4178 L 6.9097 9 H 2.5 C 2.3106 9 2.1375 8.893 2.0528 8.7236 C 1.9681 8.5542 1.9864 8.3515 2.1 8.2 L 8.1 0.2 C 8.2383 0.0156 8.4847 -0.0503 8.6967 0.0404 Z Z"
              />
            </svg>
            <Logo />
            </>
          )}
        </div>
      </div>

      {!pusbBg && sticky &&  (
          <div className="sticky top-0 z-40 bg-[#242424] w-full flex justify-center py-4 drop-shadow-lg">
            <Logo /> 
          </div>
        )}

      {!pusbBg && (
        <div className='flex flex-col items-start justify-start h-screen'>
          <div className="w-full">
            <img src={backgrounds[carousel]} alt='Gallery' className="min-h-[350px] max-h-[500px] w-full object-cover"/>
        
          </div>
          <div className="flex flex-col items-center justify-center inner-shadow drop-shadow-180">
            <div className="w-7/8 sm:w-1/2 text-center mt-8 mb-8 bg-[#242424] rounded-lg p-6 drop-shadow-lg inner-shadow">
                <p className="text-white">At UpValley Electric Inc. we do our very best to cover all of your electrical needs. We pride ourselves on servicing wineries in addition to residential & commercial electrical work. There is never a job that is too big or too small for us. When you contact us, you can be sure that you are going to be met with a friendly, professional, and knowledgeable staff member. </p>
            </div>
            <div className="w-7/8 flex flex-col items-center justify-center mt-4 mb-8">
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
            <div className="w-7/8 sm:w-1/2 flex flex-col items-center justify-center mt-8 mb-8">
              <img src={workers[carousel]} alt='Service' className="rounded-lg drop-shadow-lg"/>
            </div>
          </div>
          
          <div className='flex flex-col items-center justify-center w-full bg-[#242424] text-white py-5 shadow-inset'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-24">
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-sm font-bold tracking-wider">CONTACT</h1>
                <div className="flex flex-row items-center my-[0.25rem]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 mr-1">
                    <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                  </svg>
                  <a href="tel:7079631918" className="hover:text-[#f87f23]">  
                    <p>(707) 963-1918 </p> 
                  </a>
                </div>
                <div className="flex flex-row items-center  my-[0.25rem]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 mr-1">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                  <a href="mailto:alex@upvalleyelectric.com" className="hover:text-[#f87f23]">
                    <p>alex@upvalleyelectric.com</p>
                  </a>
                </div>
                <div className="flex flex-row items-center  my-[0.25rem]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 mr-1">
                    <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                  </svg>
                  <a href="https://maps.app.goo.gl/js2s2FvVdzN9YBLr7" target="_blank" rel="noopener noreferrer" className="hover:text-[#f87f23]">
                    <p>PO Box 458, Saint Helena, CA 94574</p>
                  </a>
                </div>
              </div>
              <div className="mt-5 sm:mt-0">
                <h4 className="text-sm font-bold tracking-wider">REGULATORY</h4>
                <p className="my-[0.25rem]">Safety & OSHA Compliance</p>
                <p className="my-[0.25rem]">CA Contractor License # 970007</p>
              </div>
            </div>
            <div className="mt-10 mb-5">
              <p className="text-xs">© 2025 UpValley Electric Inc.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
