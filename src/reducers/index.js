//import { getToken } from "../actions";
import authReducer from './authReducer'
import {combineReducers} from 'redux';

export default combineReducers({
    auth: authReducer,
})

