import React, { useContext } from "react";
import { useSelector } from "react=redux";

import "../../sass/userHeader.scss";

export default function UserHeader(props) {
  const currentUser = useSelector((state) => state.authReducer.user);

  return (
    <div>
      <h3>
        Welcome back, {currentUser.given_name} {currentUser.family_name}!
      </h3>

      <div>
        {/* <img src={props.user.avatar}></img>
        <p>{props.user.location}</p> */}
        <p className="location">Location: {props.user.location}</p>
      </div>
    </div>
  );
}
