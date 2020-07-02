import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
        Authorization: 'Basic 89450131baf446758afdb5f94f35281d:89d19ed11efa4cc7931cb4c67dd7cbca',
    },
    }
);