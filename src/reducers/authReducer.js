const INITIAL_STATE = {
    isSignedIn: null,
    authToken: null
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case "SET_TOKEN":
            return {...state, authToken: action.payload};
        case "RESET_TOKEN":
            return {...state, authToken: null};
        default:
            return state;
    }
}