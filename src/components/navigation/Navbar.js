import React, { useState } from 'react'

const Navbar = () => {
    const [mentorStatus, setMentorStatus] = useState(false)

    return (
        <div>
            <ul className="userNav">

            </ul>
            <ul className="mentorNav">
            {mentorStatus ? <li>Become a Mentor</li> : <li></li>}
            </ul>
            
        </div>
    )
}

export default navbar