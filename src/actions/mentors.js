import { axiosWithAuth } from '../components/utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const FETCH_ALL_REQUEST = 'FETCH_ALL_USERS_REQUEST';
export const FETCH_ALL_SUCCESS = 'FETCH_ALL_USERS_SUCCESS';
export const FETCH_ALL_FAILURE = 'FETCH_ALL_USERS_FAILURE';

export const ADD_MENTOR_SUCCESS = 'ADD_MENTOR_SUCCESS';
export const ADD_MENTOR_FAILURE = 'ADD_MENTOR_FAILURE';

export const EDIT_MENTOR_SUCCESS = 'EDIT_MENTOR_SUCCESS';
export const EDIT_MENTOR_FAILURE = 'EDIT_MENTOR_FAILURE'

export const DELETE_MENTOR_SUCCESS = 'DELETE_MENTOR_SUCCESS';
export const DELETE_MENTOR_FAILURE = 'DELETE_MENTOR_FAILURE';

export const ADD_INTERESTS_SUCCESS = 'ADD_INTERESTS_SUCCESS';
export const ADD_INTERESTS_FAILURE = 'ADD_INTERESTS_FAILURE';


export const SET_LOADING = 'SET_LOADING';


// Dispatch functions here 
export const getAllMentors = () => dispatch => {
    console.log('dispatch?')
    dispatch({ type: FETCH_ALL_REQUEST })

        axiosWithAuth().get(`/users`)
            .then(res =>{
            console.log(res.data)
            dispatch({ type: FETCH_ALL_SUCCESS,
                    payload: res.data
        })
    })
    .catch(error => {
        dispatch({ type: FETCH_ALL_FAILURE })
    });
}

// repeat for any functions used :)

export const actionCreators = {
    getAllMentors,
}

export const registerMentor = (newMentor, mentor_id) => dispatch => {
    console.log(newMentor, mentor_id)
    axiosWithAuth()
        .post('/mentors/', newMentor)
        .then(res => {
            dispatch({
                type: ADD_MENTOR_SUCCESS,
                payload: res.data
            })
            if(res.status === 201){
                axiosWithAuth()
                    .put(`/users/${mentor_id}`, {
                        isMentor: true
                    })
                    .then()
                    .catch(err => console.log(err))
            }
        })
        .catch(err => {
            dispatch({
                type: ADD_MENTOR_FAILURE,
                payload: err
            })
        })
}