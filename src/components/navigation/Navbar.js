import React, { useState } from "react";
import { NavLink , Link } from "react-router-dom";

const Navbar = ({ userInfo }) => {
  const [mentorStatus, setMentorStatus] = useState(false);

  return (
    <div className="navContainer" id={!mentorStatus ? "notMentor" : "mentor"}>
      <nav className="userNav">
        <Link to={location => ({ ...location, pathname: "/dashboard/calender" })} replace>Calender</Link>
        <a href="">Find a Mentor</a>
        <a href="">Notes</a>
        <Link to={location => ({ ...location, pathname: "/dashboard/profile" })} replace>Profile</Link>
      </nav>

      {!mentorStatus ? (
        <Link className="becomeMentor" to="/mentor-registration">
          Become a Mentor
        </Link>
      ) : (
        <nav className="mentorNav">
          <a href="">Mentor Profile</a>
          <a href="">Resources</a>
          <a href="">View Mentees</a>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
