import { useState } from "react"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import About from "./pages/about/About"
import Home from "./pages/home/Home"
import Mission from "./pages/mission/Mission"
import Services from "./pages/services/Services"
import Vision from "./pages/vision/Vision"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <Navbar toggleMenu={toggleMenu}/>
      <Sidebar isMenuOpen={isMenuOpen} />
      <Home />
      <About/>
      <Mission/>
      <Vision/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App

