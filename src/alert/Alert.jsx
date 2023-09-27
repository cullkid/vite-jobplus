import React from "react";
import "./alert.scss";

const Alert = ({ data: { message, details = [], type = "error" } }) => {
  if (!message) return null;

  return (
    <div className={`alert alert--${type}`}>
      <p className="alert_message">{message}</p>
      <ul className="alert_details">
        {details?.map((detail, index) => (
          <li key={index} className="alert_detail">
            {detail.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alert;
