// import {AxiosError, InternalAxiosRequestConfig} from 'axios';
// import {axios} from '.';
// import {getToken, setAccessToken} from '@/utils/helpers/persist-token';
// import {refreshToken} from '@/features/Auth/api/requests/refreshToken';

// export function rejectErrorInterceptor(error: AxiosError) {
//   return Promise.reject(error);
// }

// export function authRequestInterceptor(config: InternalAxiosRequestConfig) {
//   const token = getToken().accessToken;
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   config.headers.Accept = 'application/json';
//   return config;
// }

// export async function refreshTokenInterceptor(error: any) {
//   const prevRequest = {...error?.config};
//   // Check if the response is unauthorized (401 or 520) and the request hasn't been retried yet
//   if ([401, 520].includes(error?.response?.status) && !prevRequest?.sent) {
//     prevRequest.sent = true;

//     try {
//       const response = await refreshToken();

//       setAccessToken(response?.data?.accessToken);
//       axios.defaults.headers.common.Authorization = `Bearer ${response?.data?.accessToken}`;
//       return axios(prevRequest);
//     } catch (err: any) {
//       return Promise.reject(err);
//     }
//   }

//   return Promise.reject(error);
// }
