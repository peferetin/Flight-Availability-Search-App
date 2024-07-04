// src/api.js
import axios from 'axios';

const getAccessToken = async () => {
    try {
        console.log(import.meta.env.VITE_API_KEY);
        console.log(import.meta.env.VITE_API_SECRET);
        const response = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', {
            grant_type: 'client_credentials',
            client_id: import.meta.env.VITE_API_KEY,
            client_secret: import.meta.env.VITE_API_SECRET
        }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', }, });



        return response.data.access_token;
    } catch (error) {
        console.error('Error getting access token:', error);
        throw error;
    }
};

const login = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:3001/login', {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
}




export default getAccessToken