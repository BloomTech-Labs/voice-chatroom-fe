import React, { useState } from 'react'

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
            {!mentorStatus ? <a className="becomeMentor" href="">Become a Mentor</a> :
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