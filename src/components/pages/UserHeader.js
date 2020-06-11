import React, { useState, useEffect } from "react";

export default function UserHeader(props) {
  return (
    <div>
      {console.log("PROPS", props)}
      <p>Welcome back, {props.user.name}!</p>
      <div>
        {/* <img src={props.user.avatar}></img>
        <p>{props.user.location}</p> */}
        <p>Location: {props.user.location}</p>
      </div>
    </div>
  );
}
