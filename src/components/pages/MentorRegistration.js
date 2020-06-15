import React from 'react'
import { useForm } from 'react-hook-form'

const MentorRegistration = () => {
    const {register, handleSubmit, watch, errors} = useForm();

    const submitMentorRegistration = (values) => {

    }

    return (
        <div className="mentorRegistration">
            <form className="mentorRegisterForm" onSubmit={handleSubmit(submitMentorRegistration)}>
                <label>Mentor Name:
                    <input
                        name="mentor_name"
                        ref={register({ required: true })}
                    />
                </label>
                <label>Main Mentor Category:
                    <input
                        name="category_1"
                        ref={register({ required: true })}
                    />
                </label>
                <label>Secondary Mentor Category:
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
                <input
                    type="submit"
                    value="Register"
                />
            </form>
        </div>
    )
}

export default MentorRegistration