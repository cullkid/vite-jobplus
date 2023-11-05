import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/form.scss";
import axios from "axios";
import Alert from "../../alert/Alert";
import { ParseError } from "../../utils/ParseError";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
    };

    //post a request to backend
    try {
      const res = await axios.post(
        "http://localhost:1337/api/auth/forgot-password",
        data
      );

      setEmail("");
      setAlert({
        message: "Please check yur email fr further instructions.",
        details: [],
        type: "success",
      });
    } catch (err) {
      setAlert(ParseError(err));
    }
  };
  return (
    <>
      <Alert data={alert} />
      <form className="form form--page" onSubmit={handleSubmit}>
        <div className="form__group form__group--page">
          <label className="form__label">Email</label>
          <input
            className="form__field"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form__group form__group--page">
          <input className="form__btn" type="submit" value="Submit" />
        </div>

        <footer>
          Remember password? <Link to="/login">Login</Link>
        </footer>
      </form>
    </>
  );
}
