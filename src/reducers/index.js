import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './auth';

export default combineReducers({
    userReducer,
    authReducer,
   
})