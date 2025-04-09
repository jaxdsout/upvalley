import { useState } from "react";

function App() {
  const [lightning, setLightning] = useState(true);

  setTimeout(() => {
    setLightning(false)
  }, 2000)

  return (
    <>
      {lightning ? (
        <div className='flex flex-col items-center justify-center h-screen'>
        <svg width="200px" height="200px" viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg" className='jolt'>
          <path
            d="M 8.6967 0.0404 C 8.9086 0.131 9.0311 0.3549 8.9931 0.5822 L 8.0902 6 H 12.4999 C 12.6893 6 12.8625 6.107 12.9472 6.2764 C 13.0318 6.4458 13.0136 6.6485 12.8999 6.8 L 6.9 14.8 C 6.7617 14.9844 6.5152 15.0503 6.3033 14.9596 C 6.0913 14.869 5.9689 14.6451 6.0068 14.4178 L 6.9097 9 H 2.5 C 2.3106 9 2.1375 8.893 2.0528 8.7236 C 1.9681 8.5542 1.9864 8.3515 2.1 8.2 L 8.1 0.2 C 8.2383 0.0156 8.4847 -0.0503 8.6967 0.0404 Z Z"
            fill="#f87f23"
          />
        </svg>
        </div>
       ) : (
        <div className='flex flex-col items-center justify-between h-screen'>
      <div className='select-none flex flex-col items-center justify-center'>
          <p className="font-semibold text-[2rem] text-white -mb-1"><span className="text-[#f87f23]">Up</span>Valley Electric</p>
          <svg width="260" height="6" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="3" x2="256" y2="3" stroke="#ADADAD" strokeWidth="3" />
          </svg>
          <svg width="260" height="6" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="3" x2="256" y2="3" stroke="#f87f23" strokeWidth="3" />
          </svg>
          <p className="font-semibold  text-xs tracking-[0.4rem] ">ST. HELENA, CA</p>
      </div>
      <div>
          <p>At UpValley Electric Inc. we do our very best to cover all of your electrical needs. We pride ourselves on servicing wineries in addition to residential & commercial electrical work. There is never a job that is too big or too small for us. When you contact us, you can be sure that you are going to be met with a friendly, professional, and knowledgeable staff member. </p>
      </div>
      <div>
        <h1>SERVICES</h1>
        <ul>
            <li>New Construction & Remodel</li>
            <li>Winery Refigeration Wiring</li>
            <li>Thermal Imaging</li>
            <li>Service & Maintenance</li>
            <li>Energy Efficiency</li>
            <li>Voice and Data Cabling</li>
        </ul>
      </div>
   
      <div className='flex flex-row items-start justify-evenly w-full'>
        <div>
          <h1>CONTACT</h1>
          <p>P: (707) 963-1918 </p>
          <p>E: alex@upvalleyelectric.com</p>
          <p>M: PO Box 458, Saint Helena, CA 94574</p>
        </div>
        <div>
          <h4>REGULATORY</h4>
          <p>Safety & OSHA Compliance</p>
          <p>CA Contractor License # 970007</p>
        </div>

      </div>
      </div>
       )}
    </>
  )
}

export default App
