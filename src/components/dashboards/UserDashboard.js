import React, { useState, useContext } from "react";
import Calendar from "react-calendar";
import StarRatingComponent from "react-star-rating-component";

import { UserContext } from '../../contexts/UserContext';
import UserHeader from "./UserHeader";

function UserDashboard(props) {
  const { user } = props
  const [date, setDate] = useState(new Date());
  const [interests, setInterests] = useState([]);
  const { currentUser } = useContext(UserContext)

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
