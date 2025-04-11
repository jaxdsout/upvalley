import Logo from "./components/Logo"
import Home from "./pages/Home";
import Footer from "./partials/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact"
import NavCover from "./partials/NavCover";
import Bolt from "./components/Bolt"

import { useState, useRef, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router";

function App() {
  const [lightning, setLightning] = useState(true);
  const [cover, setCover] = useState(true);
  const [burger, setBurger] = useState(false);
  const [hide, setHide] = useState(false);
  
  const loaded = useRef(false);

  const navigate = useNavigate();

  const handleNavCover = (e) => {
    if (burger) {
      setBurger(false)
      setHide(true)
    } else {
      setBurger(true)
      setHide(false)
    }

    if (e?.key === 'Escape') {
      hide(false)
      return
    } 

  }

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true

      const lightningTimeout = setTimeout(() => {
        setLightning(false)
      }, 1000)

      const coverTimeout = setTimeout(() => {
        setCover(false)
      }, 1100)

      const hideTimeout = setTimeout(() => {
        setHide(true)
      }, 1700)

      return () => {
        clearTimeout(lightningTimeout)
        clearTimeout(coverTimeout)
        clearTimeout(hideTimeout)
      }
    }
  }, [])
  
  return (
      <div className='flex flex-col items-start justify-center h-screen'>
        {!hide ? (
          <div className="flex flex-col items-center justify-center w-screen h-screen relative bg-contain bg-repeat bg-size-[2rem]" style={{ backgroundImage: burger ? `url(img/svg-path.svg)` : "none" }}
          >
            
              {burger ? (
                  <NavCover handleNavCover={handleNavCover}/>
              ) : (
                <div 
                  className="z-50 flex flex-col items-center justify-center w-full h-screen" 
                  style={{ transform: `translateY(${lightning ? "0%" : "-56.6%"})`, transition: "transform 0.8s ease-out" }}
                >
                  <Bolt />
                  <Logo />
                </div>
              )}
             
            <div 
              className="absolute flex flex-col items-center justify-start  z-40 w-screen bg-white h-screen" 
              style={{ transform: `translateY(${cover ? "0%" : "-100%"})`, transition: "transform 0.8s ease-out" }}
            />
          </div>
        ): (
          <div className="h-screen w-screen flex flex-col items-center justify-between">
            <nav className="sticky top-0 z-30 bg-white w-full flex items-center justify-center py-4 drop-shadow-lg">
              <div onClick={() => navigate('/')}>
                  <Logo /> 
              </div>
              <div className="absolute right-4" onClick={handleNavCover}>
              <svg width="33" height="33" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="black"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" className="hover:fill-[#f87f23]"></path></svg>
              </div>
            </nav>
              <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/about/" element={ <About /> } />
                <Route path="/contact/" element={ <Contact /> } />
              </Routes>
            <Footer />
          </div>
        )}
      </div>
  )
}

export default App
