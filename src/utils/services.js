import axios from "axios";

import Swal from "sweetalert2";

const devUrl = `http://localhost:3112/`;

const prodUrl = "https://dig-be.herokuapp.com/";

export const backendUrl =
  process.env.REACT_APP_ENV === "production" ? prodUrl : devUrl;

const AUTH_TOKEN = localStorage.getItem("dig-token") || "glory";

export const loggedInUser =
  JSON.parse(localStorage.getItem(process.env.REACT_APP_PROJECT_NAME)) || null;

export const httpService = axios.create({
  baseURL: backendUrl,
  timeout: 10000,
  withCredentials: "include",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${AUTH_TOKEN}`,
    AuthenticatedBy: loggedInUser && loggedInUser.password ? "jwt" : "google",
  },
});

httpService.interceptors.response.use(
  (response) => {
    if (response && response.data.title && response.data.message) {
      Swal.fire({
        icon: "success",
        title: response.data.title,
        text: response.data.message,
        showConfirmButton: false,
        timer: 3000,
      });
    }
    return response;
  },
  (error) => {
    const failed = { error };

    if (failed.error.response) {
      return Swal.fire({
        icon: "error",
        title: failed.error.response.data.title,
        text: failed.error.response.data.message,
        showConfirmButton: false,
        timer: 3000,
      });
    }
    // return error;
  }
);

export const handleLogout = () => {
  localStorage.removeItem(process.env.REACT_APP_TOKEN);
  localStorage.removeItem(process.env.REACT_APP_PROJECT_NAME);
  window.location.assign("/login");
};
