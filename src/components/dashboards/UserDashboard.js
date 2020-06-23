import React, { useState } from "react";
import Calendar from "react-calendar";
import StarRatingComponent from "react-star-rating-component";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import UserHeader from "./UserHeader";

function UserDashboard(props) {
  const { user } = props
  const [date, setDate] = useState(new Date());
  const [interests, setInterests] = useState([]);

  // axiosWithAuth()
  //   .get(`users/${props.user.id}/interests`)
  //   .then((user) => {
  //     setInterests([user.interest_1, user.interest_2, user.interest_3]);
  //   });

  // axiosWithAuth()
  //   .put(`users/:id`, user)
  //   .then((obj) => {
  //     setUser(obj);
  //   });

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <UserHeader user={user}/>
      {/* <Calendar onChange={onChange} value={date} /> */}
      {date.toString()}
      <div>
        Your Rating:{" "}
        <StarRatingComponent
          name="userRating"
          starCount={5}
          value={user.rating}
        />
      </div>
      {interests.forEach((item) => item)}
    </div>
  );
}
export default UserDashboard;
