import moment from "moment";
import React, { useEffect, useState } from "react";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");

  useEffect(() => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    };
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts", options)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...thoughts]));
  };

  return (
    <div>
      <form className="form-box" onSubmit={onFormSubmit}>
        <label className="label-text" htmlFor="newThought">
          What´s making you happy right know?
        </label>
        <input
          className="input-text"
          id="newThought"
          type="text"
          value={newThought}
          onChange={(event) => setNewThought(event.target.value)}
        />
        <button className="submit-button" type="submit">
          <p className="happy-thought">
            &#128151;Send a happy thought&#128151;
          </p>
        </button>
      </form>
      {thoughts.map((thought) => (
        <div key={thought._id}>
          <p>{thought.message}</p>
          <button>&hearts;{thought.hearts}</button>
          <p className="date">
            - Created at: {moment(thought.createdAt).fromNow()}
          </p>
        </div>
      ))}
    </div>
  );
};
