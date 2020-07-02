//import { getToken } from "../actions";
import {combineReducers} from 'redux';

const getTokenReducer = (token = null, action) =>{
    if(action.type === 'TOKEN_SUCCESS'){
        return action.payload;
    }
    return token;
}

export default combineReducers({
    token: getTokenReducer
})

