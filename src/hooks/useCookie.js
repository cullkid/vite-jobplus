import cookie from "js-cookie";
import { jwtDecode } from "jwt-decode";

const AUTH_KEY = "jobplus-token";

export const useCookie = () => {
  //saveAuthCookie
  const saveAuthCookie = (token, expires = 4 / 24) => {
    cookie.set(AUTH_KEY, token, { expires: expires });
  };

  // deleteAuthCookie
  const deleteAuthCookie = () => {
    cookie.remove(AUTH_KEY);
  };

  //getAuthCookie
  const getAuthCookie = () => {
    return cookie.get(AUTH_KEY);
  };

  //isAuthCookieExpired
  const isAuthCookieExpired = () => {
    const token = getAuthCookie();
    if (!token) return true;
    const { exp } = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return exp < currentTime;
  };

  //hasAuthCookie
  const hasValidAuthCookie = () => {
    return !isAuthCookieExpired();
  };

  return {
    saveAuthCookie,
    deleteAuthCookie,
    getAuthCookie,
    isAuthCookieExpired,
    hasValidAuthCookie,
  };
};
