import "./contact.css";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="leftPart">
          <div className="intro">
            <h1>Contact</h1>
            <p>Fill up the form below to contact</p>
          </div>
          <div className="info">
            <ul>
              <li>
                <IoMdCall />
                
              </li>
              <li>
                <FaLocationDot />
                
              </li>
              <li>
                <IoMdMail />
               
              </li>
            </ul>
            <ul>
                <li><p>+91 12345456</p></li>
                <li><p>Lorem ipsum dolor sit </p></li>
                <li> <p>lorem ipsum</p></li>
            </ul>
          </div>
          <div className="social-media">
            <ul>
                <li><IoLogoFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaTwitter /></li>
            </ul>
          </div>
        </div>
        <div className="rightPart">
          <div className="user-data">
            <div className="enteries">
              <p>Your Name</p>
              <input type="text" />
            </div>
            <div className="enteries">
              <p>Mail</p>
              <input type="text" />
            </div>
            <div className="enteries message">
              <p>Message</p>
              <input type="text" />
            </div>
          </div>
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
