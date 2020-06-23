import React, { useState, useEffect, useContext } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { Route } from "react-router-dom";

import Navbar from "../navigation/Navbar";
import UserDashboard from "../dashboards/UserDashboard";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import UserProfile from "../profile/UserProfile";
import { UserContext } from "../../contexts/UserContext";

const Dashboard = () => {

  const { setUser, currentUser } = useContext(UserContext)
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  let existingUser = {};
    if (authState.isAuthenticated) {
      //set accesstoken and retrieving client and setting it to state
      const accesstoken = authState.accessToken;
      localStorage.setItem("accessToken", accesstoken);
      authService.getUser().then((info) => {
        setUser(info);
      });
    }
    const checkExistingUser = async () => {
      await axiosWithAuth()
         .post("/users/email", { email: "cool@hot.com" } )
         .then((res) => {
           console.log(res)
           return setUser(res)
         })
         .catch((err) => console.log(err)); 
     }
    useEffect(() => {
      
    //get req to retrieve users in db
  //  const checkExistingUser = async () => {
  //   await axiosWithAuth()
  //      .post("/users/email", { email: "" } )
  //      .then((res) => {
  //        console.log(res)
  //        setUser(res)
  //      })
  //      .catch((err) => console.log(err)); 
  //  }
 
   checkExistingUser(); 
    }, [date])

    //get req to retrieve users in db
  //  const checkExistingUser = async () => {
  //  await axiosWithAuth()
  //     .post("/users/email", { email: "cool@hot.com" } )
  //     .then((res) => {
  //       console.log(res)
  //       setUser(res)
  //     })
  //     .catch((err) => console.log(err)); 
  // }

  // checkExistingUser();
  
  return (
    <div className="dashContainer">
      <Navbar userInfo={currentUser} />
      <Route
        path="/dashboard/profile"
        render={(props) => <UserProfile {...props} userInfo={currentUser} />}
      />
      <div className="user">
        {userInfo && (
          <Route
            path="/dashboard/calender"
            render={(props) => <UserDashboard {...props} user={currentUser} />}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
