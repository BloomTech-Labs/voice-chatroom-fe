import React, { useState } from "react";
import Calendar from "react-calendar";
import StarRatingComponent from "react-star-rating-component";
import { axioswithAuth } from "../utils/axiosWithAuth";

function UserDashboard() {
  const [date, setDate] = useState(new Date());
  const [user, setUser] = useState({});
  const [interests, setInterests] = useState([]);

  axioswithAuth()
    .get(`users/:id`)
    .then((user) => {
      setUser(user);
      setInterests([user.interest_1, user.interest_2, user.interest_3]);
    });

  axioswithAuth()
    .put(`users/:id`, user)
    .then((obj) => {
      setUser(obj);
    });

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
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
