//Users
//Competitive Products
import { del, get, patch, post } from './api_helper';

// new Code
export const postData = (url, data, authToken) => {
  return post(url, data, {
    headers: { Authorization: `Bearer ${authToken}` },
  });
};
export const getData = (url, authToken) =>
  get(url, {
    headers: { Authorization: `Bearer ${authToken}` },
  });

export const patchData = (url, data, authToken) => {
  return patch(url, data, {
    headers: { Authorization: `Bearer ${authToken}` },
  });
};

export const deleteData = (url, authToken) => {
  return del(url, {
    headers: { Authorization: `Bearer ${authToken}` },
  });
};

export const postNonAuth = (url, data) => post(url, data);

export const patchNonAuth = (url, data) => patch(url, data);
