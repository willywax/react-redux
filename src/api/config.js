import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/'

const instance = axios.create({
  baseURL: BASE_URL
});

export default instance;