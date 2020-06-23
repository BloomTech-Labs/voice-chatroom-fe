import React, { useState, useEffect } from 'react'
import { useOktaAuth } from "@okta/okta-react"
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import { axiosWithAuth } from '../utils/axiosWithAuth'

const VerifyUser = () => {
    const { authState, authService } = useOktaAuth();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (!authState.isAuthenticated){
            setUserInfo(null)
        } else {
            const accessToken = authState.accessToken;
            localStorage.setItem("accessToken", accessToken);
            authService.getUser().then((info) => {
                console.log(info.email)
                setUserInfo(info)
                axiosWithAuth()
                    .post('https://wyzerapp.herokuapp.com/users/email', {email: info.email})
                    .then(res => {
                        console.log(res.data)
                        if(res.length > 0){
                            return <Redirect to='/user-dashboard' />
                        }
                    })
                    .catch(error => {
                        console.log(error.response)
                        // if(error.response.status === 404){
                        //     axiosWithAuth()
                        //         .post('https://wyzerapp.herokuapp.com/users/', {
                        //             email: info.email,
                        //             given_name: info.given_name,
                        //             family_name: info.family_name
                        //         })
                        //         .then(res => console.log(res.data))
                        //         .catch(err => console.log(err.response))
                        // }
                    })
            })
        }
    }, [])

    return (
        <div>
            {userInfo ? <h1>{userInfo.name}</h1> : <p>loading user info</p>}
        </div>
    )
}

export default VerifyUser