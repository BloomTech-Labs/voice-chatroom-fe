import React, { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useSelector, useDispatch } from "react-redux";

import { userLoginOrRegister } from "../../actions/auth";
import { getAMentor } from "../../actions/mentors";

const VerifyUser = () => {
  const currentUser = useSelector((state) => state.authReducer.user);
  const { authState, authService } = useOktaAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLoginOrRegister(authState, authService));
    dispatch(getAMentor(currentUser.id));
    console.log("useEffect", currentUser);
  }, [currentUser]);

  return <div>{currentUser.id === 0 ? <p>loading user info</p> : <p></p>}</div>;
};

export default VerifyUser;
