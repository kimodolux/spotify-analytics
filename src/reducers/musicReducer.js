export default (state = {}, action) =>{
    switch(action.type){
        case "FETCH_PLAYLISTS":
            return {...state, playlists: action.payload};
        case "FETCH_SELECTED_PLAYLIST":
            return {...state, selectedPlaylist: action.payload};
        case "FETCH_SELECTED_SONG":
                return {...state, selectedSong: action.payload};
        default:
            return state;
    }
}