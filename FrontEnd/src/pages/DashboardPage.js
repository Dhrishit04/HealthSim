import React from 'react';
import './DashboardPage.scss';

// Example icons from React Icons (npm install react-icons)
// Replace these with your preferred icons or an alternative library
import { FaHeartbeat, FaExclamationTriangle, FaPlusCircle } from 'react-icons/fa';

const DashboardPage = () => {
  return (
    <div className="dashboardContainer">
      <header className="dashboardHeader">
        <h1>Dashboard</h1>
      </header>
      <section className="dashboardContent">
        <div className="card">
          <FaHeartbeat className="cardIcon" />
          <h2>Vital Signs</h2>
          <p>View your real-time heart rate, blood pressure, and more.</p>
          <button className="cardButton">View Chart</button>
        </div>

        <div className="card">
          <FaExclamationTriangle className="cardIcon" />
          <h2>Risk Score</h2>
          <p>Stay updated on your health risk assessment at a glance.</p>
          <button className="cardButton">View Chart</button>
        </div>

        <div className="card">
          <FaPlusCircle className="cardIcon" />
          <h2>Additional Data</h2>
          <p>Explore further insights and in-depth reports.</p>
          <button className="cardButton">Explore</button>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
