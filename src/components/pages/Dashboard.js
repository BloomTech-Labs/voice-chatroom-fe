import React, { useContext } from "react";
import { Route } from "react-router-dom";

import { UserContext } from '../../contexts/UserContext';

import Navbar from "../navigation/Navbar";
import UserDashboard from "../dashboards/UserDashboard";
import UserProfile from "../profile/UserProfile"



const Dashboard = () => {
  const { currentUser } = useContext(UserContext)

  // checkExistingUser();
  
  return (
    <div className="dashContainer">
      <Navbar userInfo={currentUser} />
      <Route
        path="/dashboard/profile"
        render={(props) => <UserProfile {...props} userInfo={currentUser} />}
      />
      <div className="user">
          <Route
            path="/dashboard/calender"
            render={(props) => <UserDashboard {...props} user={currentUser} />}
          />
      </div>
    </div>
  );
};

export default Dashboard;
