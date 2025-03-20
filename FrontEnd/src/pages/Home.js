import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="dynamicBackground"></div>
      <div className="heroSection">
        <div className="heroContent">
          <h1>Welcome to the IoT Dashboard</h1>
          <p>Monitor your health data, track risk scores, and stay informed.</p>
          <button className="ctaButton">Get Started</button>
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
