import axios from "axios";

export const REACT_APP_API = "http://localhost:3000/api/v1";

// export const imageBaseUrl =
//   process.env.REACT_APP_IMAGE_ROOT_URL ||
//   'https://staging-ieltsx.sgp1.digitaloceanspaces.com/';
export const imageBaseUrl =
  "https://staging-ieltsx.sgp1.digitaloceanspaces.com/";

export const axiosApi = axios.create({
  baseURL: REACT_APP_API,
});

//  axiosApi.defaults.headers.common["Authorization"] = token

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error.response);
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

export async function image(url, data, authtoken) {
  return axiosApi
    .post(url, data, { headers: { Authorization: `Bearer ${authtoken}` } })
    .then((response) => response.data);
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
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

//export postLogin

export const postLogin = async (email, password) =>
  await axios.post(`${REACT_APP_API}/login`, {
    email,
    password,
  });
//export GoogleLogin

export const axiosGoogleLogin = async (email, fullName) =>
  await axios.post(`http://localhost:9000/api/google-login`, {
    email,
    fullName,
  });

//export postRegistration
export const axiosRegistration = async (
  fullName,
  email,
  phoneNumber,
  password,
  confirmPassword
) =>
  await axios.post(`${REACT_APP_API}/signup`, {
    fullName,
    email,
    phoneNumber,
    password,
    confirmPassword,
  });

//send email and verificationcode
export const axiosVerifyEmail = async (email, accountActivateToken) =>
  await axios.patch(`${REACT_APP_API}/verifyaccount`, {
    email,
    accountActivateToken,
  });

//Forget Password
export const axiosForgetPassword = async (email) =>
  await axios.patch(`${REACT_APP_API}/forgot-password`, {
    email,
  });

//update Password
export const axiosUpdatePassword = async (
  email,
  accountActivateToken,
  password,
  confirmPassword
) =>
  await axios.patch(`${REACT_APP_API}/update-password`, {
    email,
    accountActivateToken,
    password,
    confirmPassword,
  });

//update profile password
export const axiosUpdateProfilePassword = async (
  authtoken,
  currentPassword,
  password,
  confirmPassword
) =>
  await axios.patch(
    `${REACT_APP_API}/user/profile/update-pass`,
    {
      authtoken,
      currentPassword,
      password,
      confirmPassword,
    },
    {
      headers: { authtoken },
    }
  );
