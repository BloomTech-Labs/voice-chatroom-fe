import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const MentorRegistration = () => {
    const {register, handleSubmit, watch, errors} = useForm();
    const [categoryNumber, setCategoryNumber] = useState(1)

    const submitMentorRegistration = (values) => {

    }

    return (
        <div className="mentorRegistration">
            <form className="mentorRegisterForm" onSubmit={handleSubmit(submitMentorRegistration)}>
                <label>Mentor Name
                    <input
                        name="mentor_name"
                        ref={register({ required: true })}
                    />
                </label>
                {categoryNumber > 0 && <label>Main Mentor Category
                    <input
                        name="category_1"
                        ref={register({ required: true })}
                    />
                </label>}
                <label>
                    <img src="../assets/plus.png" alt="plus sign" />
                    add another category
                </label>
                <label>Secondary Mentor Category
                    <input
                        name="category_2"
                        ref={register}
                    />
                </label>
                <label>Third Mentor Category
                    <input
                        name="category_3"
                        ref={register}
                    />
                </label>
                <label>Bio
                    <textarea className="mentorBio"
                        type="text"
                        name="mentor_bio"
                        ref={register}
                    />
                </label>
                <input className="mentorRegisterSubmit"
                    type="submit"
                    value="Register"
                />
            </form>
        </div>
    )
}

export default MentorRegistration