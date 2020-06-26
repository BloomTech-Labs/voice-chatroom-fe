import { userConstants } from '../actions/types';

export const setUser = (user) => dispatch => {
    dispatch({
        type: userConstants.LOGIN_SUCCESS,
        payload: user
    })
}