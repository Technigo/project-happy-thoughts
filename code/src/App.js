import React, { useEffect, useState } from "react";
import moment from "moment";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNetThought] = useState("");
  useEffect(() => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);
  console.log(thoughts);
  return (
    <div>
      <form>
        <label>Type your thought</label>
        <input type="text" />
      </form>
      {thoughts.map((thought) => (
        <div key={thought._id}>
          <p>{thought.message}</p>
          <button className="btn">&hearts;{thought.hearts}</button>
          <p className="date">Created:{moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  );
};
