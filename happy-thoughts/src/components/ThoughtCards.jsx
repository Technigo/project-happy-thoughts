import React, { useState, useEffect } from "react";
import ThoughtForm from "./ThoughtForm";

const ThoughtCards = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
    .then(res => res.json())
    .then(thoughts => setThoughts(thoughts))
  }, []);

  return (
    <>
    <ThoughtForm setThoughts={setThoughts} />
    <div>
      {thoughts.map((thought, index) => (
        <p key={index}>{thought.message}</p>
      ))}
    </div>
    </>
  );
};

export default ThoughtCards;