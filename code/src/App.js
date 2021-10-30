import React, { useEffect, useState } from "react";
import moment from "moment";

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
        <div key={thought._id}>
          <p>{thought.message}</p>
          <button> &hearts; {thought.hearts}</button>
          <p>Created at: {moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  );
};
