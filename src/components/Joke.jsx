import React from "react";

function Joke({ joke }) {
  return (
    <div className="main-container">
      <p className="category">{joke.category} Joke =&gt; </p>
      <p>"{joke.joke}"</p>
    </div>
  );
}

export default Joke;

