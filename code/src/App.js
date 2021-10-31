import React, { useEffect, useState } from "react";
import moment from "moment";
import { API_URL } from "./utils/urls";

export const App = () => {
  // state properties that keep track of the list of thoughts and the new thought
  // that the user types in the input field
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");

  // useEffect hook for GET request when component is mounted
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);

  // makes a POST request to the same URL
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
      // spreads the previous array and adds the new data to it
      .then((data) => setThoughts([data, ...thoughts]));
  };

  const onLikesIncrease = (thoughtID) => {
    const options = {
      method: "POST",
    };

    fetch(
      `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtID}/like`,
      options
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  // displays the information on the page
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newThought">Type your text</label>
        <input
          id="newThought"
          type="text"
          value={newThought}
          onChange={(e) => setNewThought(e.target.value)}
        />
        <button type="submit">Send Thought!</button>
      </form>

      {thoughts.map((thought) => (
        <div key={thought._id}>
          <p>{thought.message}</p>
          <button onClick={() => onLikesIncrease(thought._id)}>
            &hearts; {thought.hearts}
          </button>
          <p className="date">
            - Created at: {moment(thought.createdAt).fromNow()}
          </p>
        </div>
      ))}
    </div>
  );
};
