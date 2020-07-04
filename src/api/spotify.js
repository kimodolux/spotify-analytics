import axios from 'axios'

export const requestPlaylists = async (token) => {
    await axios({
        method: 'get',
        url:'https://api.spotify.com/v1/me/playlists',
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    }).then(response => {
        return response
    });
};


