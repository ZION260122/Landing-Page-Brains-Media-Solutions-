import { FaBullhorn, FaChartPie, FaLaptop, FaPenFancy, FaSearch, FaUsers } from 'react-icons/fa';
import './services.css';

const servicesData = [
  {
    icon: FaBullhorn,
    title: 'Social Media Marketing',
    description: 'Engage with your audience and grow your brand presence on social media platforms.',
  },
  {
    icon: FaSearch,
    title: 'Search Engine Optimization',
    description: 'Improve your website\'s visibility on search engines and attract more organic traffic.',
  },
  {
    icon: FaLaptop,
    title: 'Web Design and Development',
    description: 'Create a stunning and responsive website to represent your brand online.',
  },
  {
    icon: FaPenFancy,
    title: 'Content Marketing',
    description: 'Craft compelling content that resonates with your audience and drives engagement.',
  },
  {
    icon: FaUsers,
    title: 'Pay-Per-Click Advertising',
    description: 'Increase your reach and drive targeted traffic to your website through PPC campaigns.',
  },
  {
    icon: FaChartPie,
    title: 'Analytics and Reporting',
    description: 'Gain insights into your digital marketing performance and make data-driven decisions.',
  },
];

const Services = () => {
  return (
   <section id='services'>
     <div className="services">
      <div className="services-container">
        <h1>Our Services</h1>
        <div className="services-content">
          {servicesData.map((service, index) => (
            <div className="service-item" key={index}>
              <div className="service-icon-container">
                <service.icon className="service-icon" />
              </div>
              <div className="service-text">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <button className="cta-button">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   </section>
  );
};

export default Services;
