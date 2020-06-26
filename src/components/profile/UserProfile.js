import React, { useState } from "react";
import { useForm } from "react-hook-form";

import plus from "../assets/plus.png";

export default function UserProfile() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  const [categoryNumber, setCategoryNumber] = useState(1);

  const addCategory = (e) => {
    e.preventDefault();
    setCategoryNumber(categoryNumber + 1);
  };

  return (
    <div className="mentorRegistration">
      <form className="mentorRegisterForm" onSubmit={handleSubmit(onSubmit)}>
        <label>
            First Name:
          <input
            type="text"
            placeholder="First name"
            name="First name"
            ref={register({ required: true, maxLength: 80 })}
          />
        </label>
        <label>
        Last Name:
          <input
            type="text"
            placeholder="Last name"
            name="Last name"
            ref={register({ required: true, maxLength: 100 })}
          />
        </label>
        <label>
            Username:
          <input
            type="text"
            placeholder="Username"
            name="Username"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
        </label>
        <label>
            Location:
          <input
            type="text"
            placeholder="Location"
            name="Location"
            ref={register}
          />
        </label>
        <label>
            Bio:

          <textarea name="Bio" ref={register} />
        </label>
        {categoryNumber > 0 && (
          <label>
            Main Interest:
            <input name="category_1" ref={register({ required: true })} />
          </label>
        )}
        {categoryNumber > 1 && (
          <label>
            Secondary Interest
            <input name="category_2" ref={register} />
          </label>
        )}
        {categoryNumber > 2 && (
          <label>
            Third Interest
            <input name="category_3" ref={register} />
          </label>
        )}
        {categoryNumber < 3 && (
          <label>
            <div id="addCategory" onClick={addCategory}>
              <img className="plus" src={plus} alt="plus sign" />
              <p>add another category</p>
            </div>
          </label>
        )}{" "}
        <input
          type="submit"
          className="mentorRegisterSubmit"
          value="Save Profile"
        />
      </form>
    </div>
  );
}
