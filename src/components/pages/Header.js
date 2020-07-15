import React from "react";
import { useOktaAuth } from "@okta/okta-react";

import "../../sass/header.scss";

import Login from "../buttons/Login";
import Logout from "../buttons/Logout";
import { Link } from 'react-router-dom';

const Header = () => {
  const { authState } = useOktaAuth();

  return (
    <header>
      <h1>
        <Link to="/dashboard">Wyzer</Link></h1>

      {authState.isAuthenticated ? <Logout /> : <Login />}
    </header>
  );
};

export default Header;
