import cookie from "js-cookie";

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
  const getAuthCookie = (key) => {
    cookie.get(AUTH_KEY);
  };

  //isAuthCookieExpired
  const isAuthCookieExpired = (key) => {};

  //hasAuthCookie
  const hasValidAuthCookie = (key) => {};

  return {
    saveAuthCookie,
    deleteAuthCookie,
    getAuthCookie,
    isAuthCookieExpired,
    hasValidAuthCookie,
  };
};
