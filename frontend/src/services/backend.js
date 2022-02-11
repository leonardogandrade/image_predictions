import axios from 'axios';

const backend = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
});

export default backend;