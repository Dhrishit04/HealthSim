// Home.js
import React from 'react';
import './Home.scss';  // Import the Home.scss file
const Home = () => {
  return (
    <div className="homeContainer">
      <div className="heroSection">
        <h1>Welcome to the IoT Dashboard</h1>
        <p>Monitor your health data, track risk scores, and stay informed.</p>
        <button className="ctaButton">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
