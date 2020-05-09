import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SecureRoute, LoginCallback } from '@okta/okta-react';
import OktaConfig from './components/utils/OktaConfig';

import './App.css';

import HomePage from './components/pages/HomePage';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path={OktaConfig.callbackPath} component={LoginCallback} />
        <SecureRoute path='/dashboard' component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;