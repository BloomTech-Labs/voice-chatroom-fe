import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import plus from '../assets/plus.png'

const MentorRegistration = () => {
    const {register, handleSubmit, watch, errors} = useForm();
    const [categoryNumber, setCategoryNumber] = useState(1)

    const addCategory = e => {
        e.preventDefault()
        setCategoryNumber(categoryNumber + 1)
    }

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
                
                {categoryNumber > 1 && <label>Secondary Mentor Category
                    <input
                        name="category_2"
                        ref={register}
                    />
                </label>}
                {categoryNumber > 2 && <label>Third Mentor Category
                    <input
                        name="category_3"
                        ref={register}
                    />
                </label>}
                {categoryNumber < 3 && <label>
                    <div id="addCategory" onClick={addCategory}>
                        <img className="plus" src={plus} alt="plus sign" />
                        <p>add another category</p>
                    </div>
                </label>}
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