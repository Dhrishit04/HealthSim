import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DashboardPage from '../pages/DashboardPage';
import History from '../pages/History';
import Settings from '../pages/Settings';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/history" component={History} />
      <Route path="/settings" component={Settings} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
