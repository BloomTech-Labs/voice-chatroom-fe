import React from "react";
import {
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

import '../../sass/dashboard.scss'

//importing Components
import Navbar from "../navigation/Navbar";
import UserDashboard from "../dashboards/UserDashboard";
import UserProfile from "../profile/UserProfile";
import VerifyUser from './VerifyUser';

const Dashboard = () => {
  const { path } = useRouteMatch();

  return (
    <div className="dashContainer">
      <Navbar />
      <VerifyUser />
      <div>
        <Switch>
          <Route path={`${path}/calendar`}>
            <UserDashboard />
          </Route>
          <Route path={`${path}/profile`}>
            <UserProfile />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
