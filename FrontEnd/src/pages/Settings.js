import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Footer from '../components/layout/Footer';
import useAuth from '../hooks/useAuth';
import { getUserSettings, updateUserSettings } from '../services/userService';
import { validateSettings } from '../utils/validation';
import './Settings.scss'; // Make sure this file actually exists or remove this line

const Settings = () => {
  const { user } = useAuth();
  const [settings, setSettings] = useState({});
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  useEffect(() => {
    async function fetchSettings() {
      try {
        const userSettings = await getUserSettings(user.id);
        setSettings(userSettings);
      } catch (err) {
        setError('Failed to load settings.');
      }
    }
    fetchSettings();
  }, [user.id]);

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateSettings(settings);
    if (validationError) {
      setError(validationError);
      return;
    }
    try {
      await updateUserSettings(user.id, settings);
      setSuccessMsg('Settings updated successfully!');
      setError(null);
    } catch (err) {
      setError('Failed to update settings.');
    }
  };

  return (
    <div className="settings-page">
      <Header />
      <div className="settings-container">
        <Sidebar />
        <main>
          <h1>Settings</h1>
          {error && <p className="error">{error}</p>}
          {successMsg && <p className="success">{successMsg}</p>}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={settings.username || ''}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={settings.email || ''}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Save Settings</button>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
