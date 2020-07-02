export const setToken = (token) => async dispatch =>{
    //return an action
    dispatch({type: 'SET_TOKEN', payload: token});
}

export const resetToken = () => async dispatch =>{
    //return an action
    dispatch({type: 'RESET_TOKEN'});
}
