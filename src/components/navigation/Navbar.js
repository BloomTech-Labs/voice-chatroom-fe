import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '../../contexts/UserContext'

const Navbar = () => {
    const { currentUser } = useContext(UserContext)

    return (
        <div className="navContainer" id={!currentUser.isMentor ? "notMentor" : "mentor"}>
            <nav className="userNav" >
                <a href="">Calendar</a>
                <a href="">Find a Mentor</a>
                <a href="">Notes</a>
                <a href="">Profile</a>
            </nav>

            {!currentUser.isMentor ? <Link className="becomeMentor" to="/mentor-registration">Become a Mentor</Link> : 
            <nav className="mentorNav">
                <a href="">Mentor Profile</a>
                <a href="">Resources</a>
                <a href="">View Mentees</a>
            </nav>
            }
        </div>
    )
}

export default Navbar