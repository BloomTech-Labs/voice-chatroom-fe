import React from 'react'
import { useOktaAuth } from '@okta/okta-react'

import '../../sass/header.scss'

import Login from '../buttons/Login'
import Logout from '../buttons/Logout'

const Header = () => {
    const { authState } = useOktaAuth()

    return (
        <header>
            <h1>Wyzer</h1>
            {authState.isAuthenticated ? <Logout /> : <Login />}
        </header>
    )
}

export default Header