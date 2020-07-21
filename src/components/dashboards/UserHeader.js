import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function UserHeader(props) {
  const [isEditing, setEditing] = useState(false);
  const currentUser = useSelector((state) => state.authReducer.user);

  const onChanges = (e) => {};

  return (
    <div data-test="userHeader">
      <form>
        {/* <input value={props.user.name} type="text" onChange={}/> */}
        <p className="user">
          Welcome back, {currentUser.given_name} {currentUser.family_name}!
        </p>
        <div>
          {/* <img src={props.user.avatar}></img>
        <p>{props.user.location}</p> */}
          <p className="location">Location: {currentUser.location}</p>
        </div>
      </form>
    </div>
  );
}
