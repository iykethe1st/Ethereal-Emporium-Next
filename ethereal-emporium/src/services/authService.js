import config from "../config.json";
import jwtDecode from "jwt-decode";
import http from "./httpService";

const apiEndPoint = config.apiUrl + "/auth";
const tokenKey = "token";

export async function login(email, password) {
  return http.post(apiEndPoint, {
    email,
    password,
  });
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  if (localStorage.getItem(tokenKey)) {
    localStorage.removeItem(tokenKey);
  }
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    const currentUser = jwtDecode(jwt);
    return currentUser;
  } catch (error) {}
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  logout,
  loginWithJwt,
  getCurrentUser,
  getJwt,
};
