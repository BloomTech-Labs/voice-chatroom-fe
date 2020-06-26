import React, { useContext } from "react";
import {
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import { useSelector } from 'react-redux'

import '../../sass/dashboard.scss'

import { UserContext } from '../../contexts/UserContext';

//importing Components
import Navbar from "../navigation/Navbar";
import UserDashboard from "../dashboards/UserDashboard";
import UserProfile from "../profile/UserProfile";

const Dashboard = () => {
  const { currentUser } = useContext(UserContext);
  const user = useSelector(state => state.authReducer.user)
  const { path } = useRouteMatch();
  console.log(currentUser)

  return (
    <div className="dashContainer">
      <Navbar userInfo={user} />
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
