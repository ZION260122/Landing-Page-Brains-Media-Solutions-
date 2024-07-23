// Home.js
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home-img">
                <img src="home.avif" alt="" />
            </div>
            <div className="home-content">
                <h1>Welcome to Brains Media Solutions</h1>
                <h2>Your Partner in Digital Excellence</h2>
                <button className="cta-button">Get Started</button>
                <div className="features">
                    <div className="feature-item">• Innovative Strategies</div>
                    <div className="feature-item">• Cutting-edge Technologies</div>
                    <div className="feature-item">• Proven Results</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
