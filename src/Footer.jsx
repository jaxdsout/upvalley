

function Footer () {

    return (
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
    )
}

export default Footer
