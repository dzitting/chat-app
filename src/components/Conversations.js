import React from "react";
import User from "./User";

export default function Conversations({ handleSubmit, results }) {
  console.log(results);
  return (
    <div className="conversations">
      <h1>Conversations</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="conversations__form">
          <input type="text" placeholder="Find user..." />
          <img
            src="https://img.icons8.com/windows/32/search--v1.png"
            alt="Search icon"
          />
        </div>
      </form>
      {results &&
        results.map((result) => (
          <User key={result.id} user={result} />
        ))}
    </div>
  );
}
