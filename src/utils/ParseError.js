export const ParseError = (err) => {
  //if error is a validation error
  if (err?.response?.data?.error?.name === "ValidationError") {
    return {
      message: err.response.data.error.message,
      details: err.response.data.error.details.errors,
      type: "error",
    };
  }

  //if error is network error
  if (err?.message === "Network Error") {
    return {
      message: "Unable to connect to the server endpoint provided",
      details: [],
      type: "error",
    };
  }

  //if error is forbidden error
  if (err?.response?.status === 403) {
    return {
      message:
        "Your current permissions do not grant you access to this resource",
      details: [],
      type: "error",
    };
  }

  //general error
  return {
    message: "An unexpected error occurred. Please contact our service team",
    details: [],
    type: "error",
  };
};
