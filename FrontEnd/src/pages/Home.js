import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  return (
    <div className="homeContainer">
      <div className="dynamicBackground"></div>
      <div className="heroSection">
        <div className="heroContent">
          <h1>Welcome to the IoT Dashboard</h1>
          <p>Monitor your health data, track risk scores, and stay informed.</p>
          <button className="ctaButton" onClick={handleGetStarted}>Get Started</button>
        </div>
        <div className="decorativeShapes">
          <span className="shape shape1"></span>
          <span className="shape shape2"></span>
          <span className="shape shape3"></span>
        </div>
      </div>
    </div>
  );
};

export default Home;
