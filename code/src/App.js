import React, { useEffect, useState } from "react";
import moment from "moment";
import { API_URL } from "./utils/urls";

export const App = () => {
  /* useStates */
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState([]);

  /* useEffects: it renders after the component gets mounted */
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);

  /* 1-Function for the submit Form */
  const onFormSubmit = (event) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought }),
    };

    event.preventDefault();
    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => console.log("POST DATA", data));
  };
  /* 2-Function for the onClick button in the Form */
  const onChangebtn = (e) => {
    setNewThought(e.target.value);
  };

  console.log("yes", thoughts, newThought); //first happens

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newThought">Type your thought</label>
        <input
          id="newThought"
          type="text"
          value={newThought}
          onChange={onChangebtn}
        />
        <button type="submit">Send thought</button>
      </form>

      <div>
        {thoughts.map((thought) => (
          <div key={thought._id}>
            <p>{thought.message}</p>
            <button> &hearts; {thought.hearts}</button>
            <p className="date">
              - Created at: {moment(thought.createdAt).fromNow()}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};


//dependency argument []
