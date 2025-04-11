import Logo from "./Logo"
import { useNavigate } from "react-router"
import { useState } from "react";

function Navbar () {
    const navigate = useNavigate();
    const [navCover, setNavCover] = useState(false);

    const handleNavCover = (e) => {
        if (e?.key === 'Escape') {
            setNavCover(false)
            return
        }

        setNavCover((prev) => !prev)

    }

    const handlePageNav = (page) => {
        if (page === 'contact') {
            navigate('/contact')
        } else if (page === 'about') {
            navigate('/about')
        } else {
            navigate('/')
        };

        handleNavCover();
    }

    if (!navCover) return (
        <nav className="sticky top-0 z-30 bg-white w-full flex items-center justify-center py-4 drop-shadow-lg">
            <div onClick={() => navigate('/')}>
                <Logo /> 
            </div>
            <div className="absolute right-4" onClick={handleNavCover}>
                <svg width="44" height="44" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </div>
        </nav>
    )

    if (navCover) return (
        <div className="absolute w-screen h-screen bg-white z-50" onKeyDown={handleNavCover} tabIndex={0}>
            <div className="flex flex-col items-center justify-center font-black">
                <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleNavCover}><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                <p className="p-2 mt-2" onClick={() => handlePageNav('home')}>HOME</p>
                <p className="p-2" onClick={() => handlePageNav('about')}>ABOUT</p>
                <p className="p-2" onClick={() => handlePageNav('contact')}>CONTACT</p>
            </div>
        </div>
    )
}

export default Navbar