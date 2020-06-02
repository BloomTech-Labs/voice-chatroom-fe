import React from "react";

export default function UserHeader(props) {
  return (
    <div>
      <p>Welcome back, {props.user.name}!</p>
      <div>
        {/* <img src={props.user.avatar}></img>
        <p>{props.user.location}</p> */}
        <p>Location: {props.user.zoneinfo}</p>
      </div>
    </div>
  );
}
