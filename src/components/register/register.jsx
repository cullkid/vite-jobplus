import { useState } from "react";
import React from "react";
import "../styles/form.scss";
import { Link } from "react-router-dom";
import axios from "axios";

export default function register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      password,
      username: email,
    };

    try {
      const res = await axios.post(
        "http://localhost:1337/api/auth/local/register",
        data
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }

    console.log(data);
  };

  return (
    <form class="form form--page" onSubmit={handleSubmit}>
      <div class="form__group form__group--page">
        <label class="form__label">First name</label>
        <input
          class="form__field"
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div class="form__group form__group--page">
        <label class="form__label">Last name</label>
        <input
          class="form__field"
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div class="form__group form__group--page">
        <label class="form__label">Email</label>
        <input
          class="form__field"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div class="form__group form__group--page">
        <label class="form__label">Choose password</label>
        <input
          class="form__field"
          type="password"
          placeholder="Choose password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div class="form__group form__group--page">
        <label class="form__label">Confirm Password</label>
        <input
          class="form__field"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <div class="form__group form__group--page">
        <input class="form__btn" type="submit" value="Register" />
      </div>

      <footer>
        Already have an account? <Link to="/login">Login</Link>
      </footer>
    </form>
  );
}
