import React, { useEffect, useState } from "react";
import moment from "moment";

import { API_URL } from "./utils/urls";

//GET https://happy-thoughts-technigo.herokuapp.com/thoughts
//POST https://happy-thoughts-technigo.herokuapp.com/thoughts
//POST HEARTS https://happy-thoughts-technigo.herokuapp.com/thoughts/THOUGHT_ID/like

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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...thoughts]));
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newThought">Type your thought: </label>
        <input
          id="newThought"
          type="text"
          value={newThought}
          onChange={(e) => setNewThought(e.target.value)}
        />
        <button type="submit">Send thought</button>
      </form>

      {thoughts.map((thought) => (
        <div key={thought._id}>
          <p>{thought.message}</p>
          <p>Created: {moment(thought.createdAt).fromNow()}</p>
          <button>&hearts; {thought.hearts}</button>
        </div>
      ))}
    </div>
  );
};

//sending request to GET happy thought and display - component
//input where to type and SEND POST request - component
//like-button POST request - component
