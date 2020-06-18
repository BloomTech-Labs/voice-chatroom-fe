import React, { useState, useEffect } from 'react'
import { useOktaAuth } from "@okta/okta-react"

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
                console.log(info)
                setUserInfo(info)
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