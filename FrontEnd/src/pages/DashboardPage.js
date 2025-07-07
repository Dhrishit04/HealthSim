import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import DashboardWidget from '../components/dashboard/widgets/DashboardWidget';
import {
  FaBars,
  FaSignInAlt,
  FaHeartbeat,
  FaExclamationTriangle,
  FaHistory,
  FaCog,
  FaPlusCircle,
  FaThLarge
} from 'react-icons/fa';
import { fetchVitalSigns, fetchRiskData } from '../api/endpoints';

import './DashboardPage.scss';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [widgetMenuOpen, setWidgetMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const [vitalData, setVitalData] = useState(null);
  const [riskData, setRiskData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) setWidgetMenuOpen(false);
  };

  const toggleWidgetsSubmenu = (e) => {
    e.stopPropagation();
    setWidgetMenuOpen(!widgetMenuOpen);
  };

  const handleParentThemeChange = (e) => {
    e.stopPropagation();
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    Promise.all([fetchVitalSigns(), fetchRiskData()])
      .then(([vRes, rRes]) => {
        setVitalData(vRes.data);
        setRiskData(rRes.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={`dashboardContainer ${theme === 'dark' ? 'darkTheme' : ''}`}>
      <header className="taskbar">
        <h2 className="taskbarTitle">IoT Dashboard</h2>

        <div className="headerActions">
          {/* 1️⃣ menu icon */}
          <div className="menuIcon" onClick={toggleMenu}>
            <FaBars />
          </div>
          {/* 2️⃣ login/profile icon */}
          <div className="loginIcon" onClick={() => navigate('/login')}>
            <FaSignInAlt />
          </div>
        </div>

        {menuOpen && (
          <nav className="dropdownMenu">
            <Link to="/history" className="dropdownItem">
              <FaHistory className="dropdownIcon" />
              History
            </Link>
            <Link to="/settings" className="dropdownItem">
              <FaCog className="dropdownIcon" />
              Settings
            </Link>
            <div className="dropdownItem submenuWrapper" onClick={toggleWidgetsSubmenu}>
              <FaThLarge className="dropdownIcon" />
              <span>Widgets</span>
              {widgetMenuOpen && (
                <div className="submenu" onClick={(e) => e.stopPropagation()}>
                  <DashboardWidget theme={theme} />
                  <button onClick={handleParentThemeChange}>
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
                  </button>
                </div>
              )}
            </div>
            <Link to="/additional-data" className="dropdownItem">
              <FaPlusCircle className="dropdownIcon" />
              Additional Data
            </Link>
          </nav>
        )}
      </header>

      {theme === 'light' && <div className="dynamicBackground" />}

      {/* HERO SECTION */}
      <section className="heroSection">
        <h1>Welcome to HealthSim</h1>
        <p>Real-time insights into vitals and health risk metrics.</p>
      </section>

      {/* INFO CARDS */}
      <section className="dashboardContent">
        <div className="card">
          <div className="cardIconWrapper">
            <FaHeartbeat className="cardIcon" />
          </div>
          <h2>Vital Signs</h2>
          <p>Track your heart rate, BP, SpO₂ and more.</p>
        </div>
        <div className="card">
          <div className="cardIconWrapper">
            <FaExclamationTriangle className="cardIcon" />
          </div>
          <h2>Risk Score</h2>
          <p>Evaluate your overall health risk in real-time.</p>
        </div>
      </section>

      {/* CHART SECTION */}
      <section className="chartSection">
        {isLoading ? (
          <p className="loadingText">Loading data...</p>
        ) : (
          <Dashboard vitalData={vitalData} riskData={riskData} theme={theme} />
        )}
      </section>
    </div>
  );
};

export default DashboardPage;
