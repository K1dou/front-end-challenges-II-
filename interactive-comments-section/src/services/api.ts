import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://comments-api-c43806001036.herokuapp.com/',
});
