import React, { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'

import { setUser } from '../../actions/auth'
import { axiosWithAuth } from "../utils/axiosWithAuth";

const VerifyUser = () => {
    const { authState, authService } = useOktaAuth();
    const [currentUser, setCurrentUser] = useState({})
    const dispatch = useDispatch()
    let history = useHistory();

    useEffect(() => {
        if (!authState.isAuthenticated){
        } else {
            const accessToken = authState.accessToken;
            localStorage.setItem("accessToken", accessToken);
            authService.getUser().then((info) => {
                axiosWithAuth()
                    .post('users/email', {email: info.email})
                    .then(res => {
                        if(res.data.length > 0){
                            setCurrentUser(res.data[0])
                            // history.push('/user-dashboard')
                        } else {
                            axiosWithAuth()
                                .post('users/', {
                                    email: info.email,
                                    given_name: info.given_name,
                                    family_name: info.family_name
                                })
                                .then(res => {
                                    setCurrentUser(res.data[0])
                                    // history.push('/user-dashboard')
                                })
                                .catch(err => console.log(err.response))
                            }
                    })
                    .catch(error => {
                        console.log('this is the other one', error)
                    })
            })
        }
    }, [])

    useEffect(() => {
        console.log(currentUser)
        dispatch(setUser(currentUser))
        if(currentUser.id > 0){
            history.push('/user-dashboard')
        }
    }, [currentUser])

  return (
    <div>
      <p>loading user info</p>
    </div>
  );
};

export default VerifyUser;
