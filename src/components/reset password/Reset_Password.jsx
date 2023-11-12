import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/form.scss";
import Alert from "../../alert/Alert";
import { useNavigate, useLocation } from "react-router-dom";
import { useApi } from "../../hooks/useApi";

export default function ResetPssword() {
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});

  const location = useLocation();
  const navigate = useNavigate();
  const { post } = useApi();

  const searchparams = new URLSearchParams(location.search);
  const code = searchparams.get("code");

  const handleSuccess = () => {
    setPasswordConfirmation("");
    setPassword("");
    navigate("/login");
    setAlert({
      message: "Please check your email for further instructions.",
      details: [],
      type: "success",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      passwordConfirmation,
      password,
      code,
    };

    await post("auth/reset-password", {
      data: data,
      onSuccess: () => handleSuccess(), //call back handlesuccess function
      onFailure: (err) => setAlert(err),
    });
  };

  return (
    <>
      <Alert data={alert} />
      <form className="form form--page" onSubmit={handleSubmit}>
        <div className="form__group form__group--page">
          <label className="form__label">Password</label>
          <input
            className="form__field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form__group form__group--page">
          <label className="form__label">confirm Password</label>
          <input
            className="form__field"
            type="password"
            placeholder="Password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>

        <div className="form__group form__group--page">
          <input className="form__btn" type="submit" value="Reset Password" />
        </div>

        <footer>
          Remember password? <Link to="/login">Login</Link>
        </footer>
      </form>
    </>
  );
}
