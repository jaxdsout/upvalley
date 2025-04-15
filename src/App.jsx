import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Footer from "./partials/Footer";
import Projects from "./pages/Projects";
import Navtab from "./partials/Navtab";
import Navbar from "./partials/Navbar";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [hide, setHide] = useState(true);
  const handleNavCover = () => setHide(prev => !prev)


  useEffect(() => {
    if (!hide) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [hide]);

  return (
    
    <div className="h-screen top-0" style={{ overflowY: hide ? "auto" : "hidden"}}>
      <AnimatePresence>
      {!hide && (
        <motion.div 
          className="w-full h-screen bg-[#EEC584] fixed top-0 left-0 py-6"
          variants={{
            hidden: { y: -500, zIndex: 0},
            visible: { y: 0, zIndex: 5},
            reset: { y: -600, zIndex: 5},
          }}
          initial="hidden"
          animate="visible"
          exit="reset"
          transition={{ duration: 0.45, delay: 0.1 }} 
        >
          <Navtab
            handleNavCover={handleNavCover} setHide={setHide}
          />
        </motion.div>
      )}
      </AnimatePresence>
        <div className=" flex flex-col items-center justify-between" style={{ zIndex: 3}}>
          <Navbar handleNavCover={handleNavCover} />
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/about/" element={ <About /> } />
              <Route path="/contact/" element={ <Contact /> } />
              <Route path="/projects/" element={ <Projects /> } />
            </Routes>
          <Footer />
        </div>
      
   
    </div>
  
  )
}

export default App
