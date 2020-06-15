import React from 'react'
import { useForm } from 'react-hook-form'

const MentorRegistration = () => {
    const {register, handleSubmit, watch, errors} = useForm();

    const submitMentorRegistration = (values) => {

    }

    return (
        <form onSubmit={handleSubmit(submitMentorRegistration)}>
            <input
                name="mentor_name"
                ref={register({ required: true })}
            />
            <input
                name="category_1"
                ref={register({ required: true })}
            />
            <input
                name="category_2"
                ref={register}
            />
            <input
                name="category_3"
                ref={register}
            />
            <input
                type="submit"
            />
        </form>
    )
}

export default MentorRegistration