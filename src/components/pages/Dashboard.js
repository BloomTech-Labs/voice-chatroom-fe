import React, { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import axiosWithAuth from "../utils/axiosWithAuth";

//imported Components
import Logout from "../buttons/Logout";
import UserHeader from "./UserHeader";
import Navbar from "../navigation/Navbar";

const Dashboard = () => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      setUserInfo(null);
    } else {
      console.log(authState);
      //set accesstoken and retrieving client and setting it to state
      const accesstoken = authState.accessToken;
      localStorage.setItem("accessToken", accesstoken);
      authService.getUser().then((info) => {
        setUserInfo(info);
      });
    }

    //creating obj for onboarded user
    const newUser = {
      email: userInfo.email,
      first_name: userInfo.given_name,
      last_name: userInfo.family_name,
    };

    //get req to retrieve users in db
    axiosWithAuth()
      .get("/users")
      .then((res) => setUsers(res))
      .catch((err) => console.log(err));

    //checking to see if onboard user is already in db
    const existingUser = users.find((i) => i.email === userInfo.email);

    //adding user to db if not already
    if (!existingUser) {
      axiosWithAuth()
        .post("/users", newUser)
        .then((res) => {
          console.log(res);
          setUserInfo(res);
        })
        .catch((err) => console.log(err));
    }
  }, [authState, authService]);

  return (
    <div className="dashContainer">
      <Navbar userInfo={userInfo} />
      <div className="user">
        {userInfo && <UserHeader user={userInfo} />}
        {authState.isAuthenticated && <Logout />}
      </div>
    </div>
  );
};

export default Dashboard;
