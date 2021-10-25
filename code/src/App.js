import React, { useEffect, useState } from "react";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  useEffect(() => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);
  console.log(thoughts);
  return (
    <div>
      {thoughts.map((thought) => (
        <div>
          <p>{thought.message}</p>
        </div>
      ))}
    </div>
  );
};
