import React, { useState, useEffect } from "react";

export default function UserHeader(props) {
  return (
    <div>
      <p>Welcome back, {props.user.first_name}!</p>
      <div>
        {/* <img src={props.user.avatar}></img>
        <p>{props.user.location}</p> */}
        <p>Location: {props.user.location}</p>
      </div>
    </div>
  );
}
