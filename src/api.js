import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/',
});

export const urls = {
  login: 'api/login',
};

export const setAuthToken = (token) => {
  api.defaults.headers.common['Authorizationkey'] = token;
};

export default api;
