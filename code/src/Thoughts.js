import React, { useState, useEffect } from "react";

export const Thoughts = props => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => {
        console.log("json", json);
        setThoughts(json);
      });
  }, []);

  return (
    <div>
      {thoughts.map(thought => (
        <div key={thought.message}>
          <br /> {thought.message}
        </div>
      ))}
    </div>
  );
};
