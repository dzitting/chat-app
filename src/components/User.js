import React from "react";

export default function User({user}) {
  console.log(user);
  const startConversation = (e) => {
    e.preventDefault();
    console.log(user);
  }
  return (
    <div className="user" onClick={(e) => startConversation(e)}>
      <figure>
        <img
          width="32px"
          height="32px"
          src="https://img.icons8.com/windows/32/user-male-circle.png"
          alt="user-male-circle"
        />
      </figure>
      <div className="user__text">
        <h4>{user.name}</h4>
        <p>{user.email}</p>
      </div>
    </div>
  );
}
