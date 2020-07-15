import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import "../../sass/dashboard.scss";

//importing Components
import Navbar from "../navigation/Navbar";
import UserDashboard from "../dashboards/UserDashboard";
import UserProfile from "../profile/UserProfile";
import VerifyUser from "./VerifyUser";
import CalendarPage from "./CalendarPage";

const Dashboard = () => {
  const { path } = useRouteMatch();

  return (
    <div className="dashContainer">
      <Navbar />
      <VerifyUser />
      <>
        <Switch>
          <Route path={`${path}/calendar`}>
            <CalendarPage />
          </Route>
          <Route path={`${path}/profile`}>
            <UserProfile />
          </Route>
          <Route path={`${path}`}>
            <UserDashboard />
          </Route>
        </Switch>
      </>
    </div>
  );
};

export default Dashboard;
