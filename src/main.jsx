import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import Authprovider from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Authprovider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Authprovider>
  </React.StrictMode>
);
