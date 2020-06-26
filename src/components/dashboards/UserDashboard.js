import React, { useState } from "react";
import { useSelector } from 'react-redux';
import Calendar from "react-calendar";
import StarRatingComponent from "react-star-rating-component";

import UserHeader from "./UserHeader";

function UserDashboard() {
  const [date, setDate] = useState(new Date());
  const [interests, setInterests] = useState([]);
  const currentUser = useSelector(state => state.authReducer.user)

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <UserHeader user={currentUser}/>
      <Calendar onChange={onChange} value={date} />
      {date.toString()}
      <div>
        Your Rating:{" "}
        <StarRatingComponent
          name="userRating"
          starCount={5}
          // value={currentUser.rating}
        />
      </div>
      {interests.forEach((item) => item)}
    </div>
  );
}
export default UserDashboard;
