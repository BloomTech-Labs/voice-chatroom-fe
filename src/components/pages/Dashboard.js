import React , { useState } from "react";
import {
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

import '../../sass/dashboard.scss'

//importing Components
import Navbar from "../navigation/Navbar";
import UserDashboard from "../dashboards/UserDashboard";
import UserProfile from "../profile/UserProfile";
import VerifyUser from './VerifyUser';
import MentorProfile from "../profile/MentorProfile";

const Dashboard = () => {
  //selecting user from redux store
  const currentUser = useSelector(state => state.authReducer.user)

  const { path } = useRouteMatch();
  
  // selecting mentors from redux store
  const currentMentors = useSelector(state => state.mentorReducer.mentors)

  console.log("dasboard mentor", currentMentors)
  return (
    <div className="dashContainer">
      <Navbar />
     <VerifyUser /> 
     { currentUser.id === 0 && 
      <div>
        <Switch>
          <Route path={`${path}/calendar`}>
            <UserDashboard />
          </Route>
          <Route path={`${path}/profile`}>
            <UserProfile />
          </Route>
          <Route path={`${path}/mentor/profile`}>
            <MentorProfile />
          </Route>
        </Switch>
      </div> }
    </div> 
  );
};

export default Dashboard;
