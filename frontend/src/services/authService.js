import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/';

export const register = async (userData) => {
  const response = await axios.post(API_URL + 'register', userData, {
    withCredentials: true,
  });
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData, {
    withCredentials: true,
  });
  return response.data;
};
