import axios from 'axios';

export const BASE_URL = 'https://react-redux-api.herokuapp.com'

const instance = axios.create({
  baseURL: BASE_URL
});


export default instance;