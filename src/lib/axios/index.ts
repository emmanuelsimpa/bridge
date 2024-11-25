import Config from 'react-native-config';
import Axios from 'axios';
// import {
//   authRequestInterceptor,
//   refreshTokenInterceptor,
//   rejectErrorInterceptor,
// } from './interceptors';

export const axios = Axios.create({
  baseURL: `${Config.API_URL}/`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// axios.interceptors.request.use(authRequestInterceptor, rejectErrorInterceptor);
// axios.interceptors.response.use(response => {
//   return response;
// }, refreshTokenInterceptor);
