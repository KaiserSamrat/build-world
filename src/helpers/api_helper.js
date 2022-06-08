import axios from 'axios';

export const API_URL =
  process.env.REACT_APP_BASE_URL_STAGING ||
  'https://jsonplaceholder.typicode.com';

export const axiosApi = axios.create({
  baseURL: API_URL,
});
//  axiosApi.defaults.headers.common["Authorization"] = token

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('GLOBAL_ERROR', error.response);
    return Promise.reject(error);
  }
);

export async function get(url, config = {}) {
  return await axiosApi
    .get(url, { ...config })
    .then((response) => response.data);
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, data, { ...config })
    .then((response) => response.data);
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, data, { ...config })
    .then((response) => response.data);
}

export async function patch(url, data, config) {
  return axiosApi
    .patch(url, data, { ...config })
    .then((response) => response.data);
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then((response) => response.data);
}
