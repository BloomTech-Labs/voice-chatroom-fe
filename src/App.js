import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SecureRoute, LoginCallback } from '@okta/okta-react';
import OktaConfig from './components/utils/OktaConfig';
import HomePage from './components/pages/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path={OktaConfig.callbackPath} component={LoginCallback} />
      </Router>
    </div>
  );
}

export default App;