import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Mission from './pages/mission/Mission';
import Services from './pages/services/Services';
import Vision from './pages/vision/Vision';
import "./App.css"

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="mission">
        <Mission />
      </div>
      <div id="vision">
        <Vision />
      </div>
      <div id="services">
        <Services />
      </div>
      <div>
        <div id='footer'>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
