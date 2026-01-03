import axios from 'axios';


const API_URL = 'http://localhost:5000';

const api = axios.create({
    baseURL: API_URL,
});


api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export const loginUser = (credentials) => api.post('/auth/login', credentials);

export const fetchGames = (filter) => api.get(`/games?filter=${filter}`);
export const fetchFavorites = () => api.get('/favorites');
export const addFavorite = (gameId) => api.post(`/favorites/${gameId}`);
export const removeFavorite = (gameId) => api.delete(`/favorites/${gameId}`);

export default api;