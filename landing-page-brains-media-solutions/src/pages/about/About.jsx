
import './about.css';

const About = () => {
  return (
    <section id='about'>
      <div className="about">
      <div className="about-container">
        <div className="banner">
          <img src="about.avif" alt="About Us" />
          <div className="overlay"></div>
          <div className="text-content">
            <p>
              Discover how Brains Media Solutions can elevate your digital presence.
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="content">
          <h1>About Brains Media Solutions</h1>
          <ul>
            <li>
              Brains Media Solutions Pvt. Ltd is a premier Digital Marketing Agency based in Belgaum, Karnataka, India. Since our inception in 2008, we have evolved to meet the dynamic needs of the digital marketing landscape.
            </li>
            <li>
              In 2015, we underwent a significant transformation to specialize in digital marketing. Today, we serve businesses across Belgaum, Hubli, Dharwad, Maharashtra, Pune, Chennai, and PAN India.
            </li>
            <li>
              Our comprehensive digital marketing services are designed to help businesses succeed online. From lead generation to conversion optimization, our services are tailored to drive success and growth.
            </li>
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
