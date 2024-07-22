import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import About from "./pages/about/About"
import Home from "./pages/home/Home"
import Mission from "./pages/mission/Mission"
import Services from "./pages/services/Services"
import Vision from "./pages/vision/Vision"

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Mission/>
      <Vision/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App

