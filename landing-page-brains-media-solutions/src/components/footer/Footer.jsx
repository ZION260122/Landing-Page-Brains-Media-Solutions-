import Contact from '../../pages/contact/Contact';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-about'>
          <h2>About Us</h2>
          <p>We are committed to providing excellent service and innovative solutions. Learn more about our mission and values.</p>
        </div>
        <div className='footer-links'>
          <h2>Quick Links</h2>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </div>
        <div className='footer-contact'>
      <Contact/>
        </div>
        <div className='footer-cta'>
          <h2>Stay Connected</h2>
          <p>Sign up for our newsletter to get the latest updates and offers.</p>
          <form className='cta-form'>
            <input type='email' placeholder='Your Email Address' required />
            <button type='submit'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
