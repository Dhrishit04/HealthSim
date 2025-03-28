import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DashboardPage from '../pages/DashboardPage';
import History from '../pages/History';
import Settings from '../pages/Settings';
import NotFound from '../pages/NotFound';



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/history" element={<History />} />
      <Route path="/settings" element={<Settings />} />
      {/* If someone tries /notfound explicitly, you can handle it or omit this line */}
      <Route path="/notfound" element={<NotFound />} />
      {/* Catch-all for unmatched routes → 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
