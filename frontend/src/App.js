import React from "react";
import JokeComponent from "./components/JokeComponent";
import { jokes } from "./data";
import "./styles.css";

export default function App() {
  return (
    <div className="jokeWrapper">
      {jokes.map((el) => (
        <JokeComponent joke={el} key={el.id} />
      ))}
    </div>
  );
}
