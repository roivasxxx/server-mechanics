import React from "react";

export default function JokeComponent({ joke }) {
  return (
    <div className="jokeItemWrapper">
      <div className="jokeItem">
        <div className="jokeSetup">{joke?.setup || "Joke setup"}</div>
        <div className="jokePunchline">
          {joke?.punchline || "Joke punchline"}
        </div>
      </div>
    </div>
  );
}
