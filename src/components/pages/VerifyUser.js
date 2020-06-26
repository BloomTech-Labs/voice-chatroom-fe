import React, { useState, useEffect, useContext } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useHistory } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const VerifyUser = (props) => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  const { setUser } = useContext(UserContext);
  let history = useHistory();

  useEffect(() => {
    if (!authState.isAuthenticated) {
      setUserInfo(null);
    } else {
      const accessToken = authState.accessToken;
      localStorage.setItem("accessToken", accessToken);
      authService.getUser().then((info) => {
        setUserInfo(info);
        axiosWithAuth()
          .post("users/email", { email: info.email })
          .then((res) => {
            if (res.data.length > 0) {
              setUser(res.data[0]);
              history.push("/user-dashboard");
            } else {
              axiosWithAuth()
                .post("users/", {
                  email: info.email,
                  first_name: info.given_name,
                  last_name: info.family_name,
                })
                .then((res) => {
                  setUser(res.data[0]);
                  history.push("/user-dashboard");
                })
                .catch((err) => console.log(err.response));
            }
          })
          .catch((error) => {
            console.log("this is the other one", error);
          });
      });
    }
  }, []);

  return (
    <div>
      <p>loading user info</p>
    </div>
  );
};

export default VerifyUser;
