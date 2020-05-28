import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import Logout from '../buttons/Logout';
import Navbar from '../navigation/Navbar';

const Dashboard = () => {
    const { authState, authService } = useOktaAuth();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (!authState.isAuthenticated) {
            setUserInfo(null);
        } else {
            console.log(authState)
            const accesstoken = authState.accessToken
            localStorage.setItem('accessToken', accesstoken)
            authService.getUser().then((info) => {
                setUserInfo(info);
            });
        }
    }, [authState, authService]);

    return (
        <div>
            <Navbar userInfo={userInfo} />
            <div className="user">
                {userInfo &&
                    <div>
                        <p>Welcome back, {userInfo.name}!</p>
                        <p></p>
                    </div>
                }
                {authState.isAuthenticated && <Logout />}
            </div>
        </div>
    );
};

export default Dashboard;