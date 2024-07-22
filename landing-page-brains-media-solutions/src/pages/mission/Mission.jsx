import './mission.css'

import { FaBullseye, FaLightbulb, FaHandsHelping } from 'react-icons/fa';
import './mission.css';

const Mission = () => {
  return (
    <div className="mission">
      <div className="mission-container">
        <h1>Our Mission</h1>
        <p>At Brains Media Solutions, our mission is to deliver innovative and effective digital marketing solutions to help our clients achieve their business goals.</p>
        <div className="mission-content">
          <div className="mission-item">
            <FaBullseye className="mission-icon" />
            <h2>Goal-Oriented</h2>
            <p>Our primary goal is to help businesses succeed online by providing tailored digital marketing strategies.</p>
          </div>
          <div className="mission-item">
            <FaLightbulb className="mission-icon" />
            <h2>Innovative Solutions</h2>
            <p>We continuously explore new technologies and methods to offer creative and effective marketing solutions.</p>
          </div>
          <div className="mission-item">
            <FaHandsHelping className="mission-icon" />
            <h2>Client-Centric</h2>
            <p>Our client&apos;s success is our success. We are committed to building strong, long-lasting relationships.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
