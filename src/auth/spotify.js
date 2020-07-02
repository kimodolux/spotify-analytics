import axios from 'axios'

const client_id = '89450131baf446758afdb5f94f35281d';
const redirect_uri = 'http://localhost:3000/callback';

export const requestToken =  () => {
    axios({
        method: 'get',
        url:'https://accounts.spotify.com/authorize',
        params: {
            client_id,
            response_type :'token',
            redirect_uri,
            scope: 'user-top-read',
            state: 'state'
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        },
    }).then(response => {
        console.log(response)
    }).catch(e=>{
        console.log(e.response)
    });
    //dispatch({type: 'GET_TOKEN', payload: response.data});
};


