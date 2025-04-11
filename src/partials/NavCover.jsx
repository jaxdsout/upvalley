import { useNavigate } from "react-router"

function NavCover ({ handleNavCover }) {
    const navigate = useNavigate();

    const handlePageNav = (page) => {
        if (page === 'contact') {
            navigate('/contact/')
        } else if (page === 'about') {
            navigate('/about/')
        } else {
            navigate('/upvalley/')
        };
        handleNavCover();
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen font-black">
            <div className="z-50 flex flex-col items-center text-5xl cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleNavCover}><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" className="hover:fill-[#f87f23]"></path></svg>
                <button className="p-2 mt-2 hover:text-[#f87f23] cursor-pointer" onClick={() => handlePageNav('home')}>HOME</button>
                <button className="p-2 hover:text-[#f87f23] cursor-pointer" onClick={() => handlePageNav('about')}>ABOUT</button>
                <button className="p-2 hover:text-[#f87f23] cursor-pointer" onClick={() => handlePageNav('contact')}>CONTACT</button>
            </div>
         
        </div>
    )
}

export default NavCover