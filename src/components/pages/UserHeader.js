import React, { useContext } from "react";
import { useSelector } from 'react=redux'

export default function UserHeader(props) {
  const currentUser = useSelector(state => state.authReducer.user)

  return (
    <div>
      <p>Welcome back, {currentUser.given_name} {currentUser.family_name}!</p>
      <div>
        {/* <img src={props.user.avatar}></img>
        <p>{props.user.location}</p> */}
        <p>Location: {props.user.location}</p>
      </div>
    </div>
  );
}
