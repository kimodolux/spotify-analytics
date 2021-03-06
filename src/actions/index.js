import axios from 'axios';

export const setToken = (token) => dispatch =>{
    dispatch({type: 'SET_TOKEN', payload: token});
}

export const resetToken = () => dispatch =>{
    dispatch({type: 'RESET_TOKEN'});
}

export const fetchPlaylists = (token) => async dispatch =>{
    const response = await axios({
        method: 'get',
        url: 'https://api.spotify.com/v1/me/playlists',
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    });
    dispatch({type: 'FETCH_PLAYLISTS', payload: response.data.items});
}

export const fetchPlaylist = (token, playlistId) => async dispatch =>{
    const response = await axios({
        method: 'get',
        url: 'https://api.spotify.com/v1/playlists/' + playlistId,
        headers:{
            'Authorization': 'Bearer ' + token,
        },
    });
    dispatch({type: 'FETCH_SELECTED_PLAYLIST', payload: response.data});
}

export const selectSong = (song) => dispatch =>{
    dispatch({type: 'FETCH_SELECTED_SONG', payload: song});
}

export const fetchLyrics = (songId, songName) => dispatch =>{
    const lyrics = 'PLACE HOLDER';
    let song = {id: songId, name: songName, lyrics}
    dispatch({type: 'FETCH_LYRICS', payload: song})
}