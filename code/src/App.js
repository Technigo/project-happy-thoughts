import React, { useEffect, useState } from "react";
import moment from "moment";

import { API_URL } from "./utils/urls";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...thoughts]));
  };

  return (
    <div>
      <h1>&hearts; Happy Thoughts &hearts;</h1>

      <form className="newThoughtWrapper" onSubmit={onFormSubmit}>
        {" "}
        <label htmlFor="newThought">Type happy thought </label>
        <input
          id="newThought"
          type="text"
          value={newThought}
          onChange={(event) => setNewThought(event.target.value)}
        />
        <button type="submit" className="sendThought">
          Post happy thought
        </button>
      </form>

      <div className="container">
        {thoughts.map((thought) => (
          <div className="thoughtWrapper" key={thought._id}>
            <p>{thought.message}</p>
            <button className="hearts">&hearts; {thought.hearts}</button>
            <p className="date">
              Posted: {moment(thought.createdAt).fromNow()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 
the first component should be sending the request to get happy thoughts from api and displaying them. display a list of happy thoughts as component.

 the second component should be a form/text-input where you can type a message, a button where you send a post request to send a new message and save that thought in the api. 
 
 the third component is the like button, that we can like (with a heart) this will also send a post request to update the amount of likes to a specific message.
 */
