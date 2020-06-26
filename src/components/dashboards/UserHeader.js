import React, { useState, useEffect } from "react";

export default function UserHeader(props) {
  const [isEditing, setEditing] = useState(false);

  const onChanges = (e) => {
    
  }

  return (
    <div>
      <form>
        {/* <input value={props.user.name} type="text" onChange={}/> */}
        <p>Welcome back, {props.user.name}!</p>
        <div>
          {/* <img src={props.user.avatar}></img>
        <p>{props.user.location}</p> */}
          <p>Location: {props.user.location}</p>
        </div>
      </form>
    </div>
  );
}
