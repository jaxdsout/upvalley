import Logo from "./Logo"
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact"
import Navbar from "./Navbar";
import Bolt from "./Bolt"

import { useState } from "react";
import { Routes, Route } from "react-router";

function App() {
  const [lightning, setLightning] = useState(true);
  const [cover, setCover] = useState(true);
  const [hideCover, setHide] = useState(false);

  setTimeout(() => {
    setLightning(false)
  }, 1000)
  
  setTimeout(() => {
    setCover(false)
  }, 1100)

  setTimeout(() => {
    setHide(true)
  }, 1700)
  
  return (
      <div className='flex flex-col items-start justify-center h-screen'>
        {!hideCover ? (
          <div className="flex flex-col items-center justify-center w-screen h-screen relative">
            <div 
              className="z-50 flex flex-col items-center justify-center w-full h-screen" 
              style={{ transform: `translateY(${lightning ? "0%" : "-56.6%"})`, transition: "transform 0.8s ease-out" }}
            >
              <Bolt />
              <Logo />
            </div>
            <div 
              className="absolute flex flex-col items-center justify-start  z-40 w-screen bg-white h-screen" 
              style={{ transform: `translateY(${cover ? "0%" : "-100%"})`, transition: "transform 0.8s ease-out" }}
            />
          </div>
        ): (
          <div className="h-screen w-screen flex flex-col items-center justify-between">
            <Navbar />
              <Routes>
                <Route path="/" index element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/contact" element={ <Contact /> } />
              </Routes>
            <Footer />
          </div>
        )}
      </div>
  )
}

export default App
