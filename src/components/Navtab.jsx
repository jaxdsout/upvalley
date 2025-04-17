import { useNavigate } from "react-router"
import { useEffect } from "react";

export default function Navtab ({ handleNavCover }) {
    const navigate = useNavigate();

    const handlePageNav = (page) => {
        if (page === 'contact') {
            navigate('/contact/')
        } else if (page === 'about') {
            navigate('/about/')
        } else if (page === 'projects') {
            navigate('/projects/')
        } else {
            navigate('/')
        };
        handleNavCover();
    }

    useEffect(() => {
        const handleEscape = (e) => {
          if (e.key === 'Escape') {
            handleNavCover();
          }
        };
      
        document.addEventListener('keydown', handleEscape);
        return () => {
          document.removeEventListener('keydown', handleEscape);
        };
      }, []);

    return (
        <div className="h-full flex flex-col items-center justify-center text-5xl cursor-pointer font-bold tracking-wide text-black">
            <svg width="36" height="36" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleNavCover} className="mt-24 sm:mt-2 active:translate-y-1">
                <path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" stroke="10" strokeWidth="20" clip-rule="evenodd" className="hover:fill-[#7b664a]"></path>
            </svg>
            <button className="p-2 hover:text-[#7b664a] cursor-pointer active:translate-y-1" onClick={() => handlePageNav('home')}>HOME</button>
            <button className="p-2 hover:text-[#7b664a] cursor-pointer active:translate-y-1" onClick={() => handlePageNav('about')}>ABOUT</button>
            <button className="p-2 hover:text-[#7b664a] cursor-pointer active:translate-y-1" onClick={() => handlePageNav('projects')}>PROJECTS</button>
            <button className="p-2 hover:text-[#7b664a] cursor-pointer active:translate-y-1" onClick={() => handlePageNav('contact')}>CONTACT</button>
        </div>
    )
}
