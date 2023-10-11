import React from "react";

export default function MessageMe() {
  return (
    <>
      <div className="message-me">
        <figure>
          <img src="https://img.icons8.com/windows/48/user-male-circle.png" alt='profile image in message box'/>
        </figure>
        <div className="message-me__text">
          <h4>My Name</h4>
          <p>This is a message response.</p>
        </div>
      </div>
    </>
  );
}
