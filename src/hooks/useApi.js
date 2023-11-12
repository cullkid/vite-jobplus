import React from "react";
import axios from "axios";
import { ParseError } from "../utils/ParseError";

export const useApi = () => {
  const request = async (endpoint, options = {}) => {
    try {
      const res = await axios({
        method: options.method || "GET",
        url: `http://localhost:1337/api/${endpoint}`,
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
  };
};
