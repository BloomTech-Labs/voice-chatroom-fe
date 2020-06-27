import {
    ADD_MENTOR_SUCCESS,
    ADD_MENTOR_FAILURE
} from '../actions/mentors'

const initialState = {
    mentor: {

    },
    error: null
}

export default function mentorReducer(state = initialState, action){
    switch(action.type){
        case ADD_MENTOR_SUCCESS:
            return {
                ...state,
                mentor: action.payload,
                error: null
            }
        case ADD_MENTOR_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
    
}