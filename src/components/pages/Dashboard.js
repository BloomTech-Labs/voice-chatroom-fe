import React, { useContext } from "react";

import '../../sass/dashboard.scss'

import { UserContext } from '../../contexts/UserContext';

import Navbar from "../navigation/Navbar";
import UserDashboard from "../dashboards/UserDashboard";
import UserHeader from "./UserHeader";

const Dashboard = () => {
  const { currentUser } = useContext(UserContext)
  console.log(currentUser)

  return (
    <div className="dashContainer">
      <Navbar userInfo={currentUser} />
      <div className="user">
        {currentUser && <UserHeader user={currentUser} />}
        <UserDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
