import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SecureRoute, LoginCallback } from "@okta/okta-react";
import OktaConfig from "./components/utils/OktaConfig";

import './sass/global.scss';

import { UserContext } from './contexts/UserContext';

import VerifyUser from './components/pages/VerifyUser';
import Header from './components/pages/Header';
import HomePage from './components/pages/HomePage';
import Dashboard from './components/pages/Dashboard';
import MentorRegistration from './components/pages/MentorRegistration'

function App() {
  const [currentUser, setCurrentUser] = useState({
      id: 0,
      email: "",
      given_name: "",
      family_name: "",
      username: "",
      location: "",
      interest_1: "",
      interest_2: "",
      interest_3: "",
      created_at: "",
      avatar: "",
      isMentor: false,
      user_bio: "",
      user_rating: 0
  })

  const setUser = (user) => {
    setCurrentUser(user);
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ currentUser, setUser }}>
        <Header />
        <Router>
          <Route path="/" exact component={HomePage} />
          <Route path={OktaConfig.callbackPath} component={LoginCallback} />
          <SecureRoute exact path="/dashboard" component={VerifyUser} />
          <SecureRoute path='/user-dashboard' component={Dashboard} />
          <Route path='/mentor-registration' component={MentorRegistration} />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
