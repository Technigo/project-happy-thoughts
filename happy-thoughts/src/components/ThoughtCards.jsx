import React, { useState, useEffect } from "react";

const ThoughtCards = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
    .then(res => res.json())
    .then(thoughts => setThoughts(thoughts))
  }, []);

  return (
    <div>
      {thoughts.map(thought => (
        <p key={thought._id}>{thought.message}</p>
      ))}
    </div>
  );
};

export default ThoughtCards;