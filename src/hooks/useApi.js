import React from "react";
import axios from "axios";
import { ParseError } from "../utils/ParseError";
import { useCookie } from "./useCookie";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const useApi = () => {
  const { getAuthCookie } = useCookie();
  const token = getAuthCookie();
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; //axios defaults header formular
  }

  const request = async (endpoint, options = {}) => {
    try {
      const res = await axios({
        method: options.method || "GET",
        url: `${BACKEND_URL}/${endpoint}`,
        data: options.data || {},
        params: options.params || {},
      });
      options.onSuccess && options.onSuccess(res);

      return res;
    } catch (err) {
      options.onFailure && options.onFailure(ParseError(err));
    }
  };

  return {
    post: (endpoint, options) =>
      request(endpoint, { ...options, method: "POST" }),

    get: (endpoint, options) =>
      request(endpoint, { ...options, method: "GET" }),

    put: (endpoint, options) =>
      request(endpoint, { ...options, method: "PUT" }),

    delete: (endpoint, options) =>
      request(endpoint, { ...options, method: "DELETE" }),
  };
};
