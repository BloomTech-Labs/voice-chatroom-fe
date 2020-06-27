import React, { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useDispatch } from 'react-redux'

import { userLoginOrRegister } from '../../actions/auth'

const VerifyUser = () => {
    const { authState, authService } = useOktaAuth();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userLoginOrRegister(authState, authService))
    }, [])

  return (
    <div>
      <p>loading user info</p>
    </div>
  );
};

export default VerifyUser;
