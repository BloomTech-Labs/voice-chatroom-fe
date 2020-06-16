import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ userInfo }) => {
    const [mentorStatus, setMentorStatus] = useState(false)

    return (
        <div className="navContainer" id={!mentorStatus ? "notMentor" : "mentor"}>
            <nav className="userNav" >
                <a href="">Calendar</a>
                <a href="">Find a Mentor</a>
                <a href="">Notes</a>
                <a href="">Profile</a>
            </nav>

            {!mentorStatus ? <Link className="becomeMentor" to="/mentor-registration">Become a Mentor</Link> : 
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