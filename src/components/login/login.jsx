import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/form.scss";
import axios from "axios";
import Alert from "../../alert/Alert";
import { ParseError } from "../../utils/ParseError";
import { useNavigate } from "react-router-dom";

export default function login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      identifier,
      password,
    };

    //post a request to backend
    try {
      const res = await axios.post(
        "http://localhost:1337/api/auth/local",
        data
      );

      setIdentifier("");
      setPassword("");
      setAlert({
        message: "Logged in successfully",
        details: [],
        type: "success",
      });
      navigate("/");
    } catch (err) {
      setAlert(ParseError(err));
    }
  };
  return (
    <>
      <Alert data={alert} />
      <form class="form form--page" onSubmit={handleSubmit}>
        <div class="form__group form__group--page">
          <label class="form__label">Email</label>
          <input
            class="form__field"
            type="text"
            placeholder="Email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
        </div>

        <div class="form__group form__group--page">
          <label class="form__label">Password</label>
          <input
            class="form__field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div class="form__group form__group--page">
          <input class="form__btn" type="submit" value="Login" />
        </div>

        <footer>
          Dont have an account? <Link to="/register">Register</Link>
        </footer>
      </form>
    </>
  );
}
