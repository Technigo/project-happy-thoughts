import moment from "moment";
import React, { useEffect, useState } from "react";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThoughts, setNewThoughts] = useState("");

  useEffect(() => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      Headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ message: newThoughts }),
    };
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts", options)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...thoughts]));
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newThoughts">Type your thought</label>
        <input
          id="newThoughts"
          type="text"
          value={newThoughts}
          onChange={(event) => setNewThoughts(event.target.value)}
        />
        <button type="submit">Send a thought!</button>
      </form>
      {thoughts.map((thoughts) => (
        <div key={thoughts._id}>
          <p>{thoughts.message}</p>
          <button>&hearts;{thoughts.hearts}</button>
          <p className="date">
            - Created at {moment(thoughts.createdAt).fromNow}
          </p>
        </div>
      ))}
    </div>
  );
};
