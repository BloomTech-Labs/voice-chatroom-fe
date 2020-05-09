import React from 'react'
import { useOktaAuth } from '@okta/okta-react'

import Login from '../buttons/Login'
import Logout from '../buttons/Logout'

const Homepage = () => {
    const { authState } = useOktaAuth()

    return (
        <div>
            {authState.isAuthenticated ? <Logout /> : <Login />}
        </div>
    )

}

export default Homepage