//import { getToken } from "../actions";
import authReducer from './authReducer'
import musicReducer from './musicReducer'
import {combineReducers} from 'redux';

export default combineReducers({
    auth: authReducer,
    music: musicReducer
})

