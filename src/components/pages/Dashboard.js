import React , { useEffect } from "react";
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

import { getAMentor } from '../../actions/mentors'


const Dashboard = () => {

  const currentUser = useSelector(state => state.authReducer.user)

  useEffect(()=> {
    dispatch(getAMentor(currentUser.id))
    console.log('useEffect')
  }, [])

  const { path } = useRouteMatch();

  const dispatch = useDispatch()
  
  // selecting mentor from redux store
  const currentMentor = useSelector(state => state.mentorReducer.mentor)

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
          <Route path={`${path}/mentor/${currentMentor.mentor_name}/profile`}>
            <MentorProfile />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
