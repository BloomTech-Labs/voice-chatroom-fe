import React, { useContext } from "react";
import {
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

import '../../sass/dashboard.scss'

import { UserContext } from '../../contexts/UserContext';

//importing Components
import Navbar from "../navigation/Navbar";
import UserDashboard from "../dashboards/UserDashboard";
import UserProfile from "../profile/UserProfile";

const Dashboard = () => {
  const { currentUser } = useContext(UserContext);
  const { path } = useRouteMatch();

  return (
    <div className="dashContainer">
      <Navbar userInfo={currentUser} />
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
