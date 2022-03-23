import React, { useState, useEffect } from "react";

const Thoughts = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then(res => res.json())
      .then(thoughts => setThoughts(thoughts));

  }, []);

  return (

    <div>
      <ul>
        {thoughts.map((thought) => (
          <li key={thought.id}>
              {thought.message}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Thoughts;