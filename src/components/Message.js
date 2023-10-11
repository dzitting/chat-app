import React from "react";

export default function Message({ message }) {
  return (
    <div className="message">
      <div className="message__container">
        <figure>
          <img
            src="https://img.icons8.com/windows/48/user-male-circle.png"
            alt="profile image in message box"
          />
        </figure>
        <div className="message__text">
          <h4>{message.name}</h4>
          <p>{message.message}</p>
        </div>
      </div>
      <span>
        {new Intl.DateTimeFormat("en-US", { timeStyle: "short" }).format(
          message.timestamp
        )}
      </span>
    </div>
  );
}
