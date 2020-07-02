export const getToken = token =>{
    //return an action
    return{
        type: 'TOKEN_SUCCESS',
        payload: token
    };
}
