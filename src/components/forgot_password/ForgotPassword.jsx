import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/form.scss";
import Alert from "../../alert/Alert";
import { useApi } from "../../hooks/useApi";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({});

  const { post } = useApi();

  const handleSuccess = () => {
    setEmail("");
    setAlert({
      message: "Please check your email for further instructions.",
      details: [],
      type: "success",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
    };

    await post("auth/forgot-password", {
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
