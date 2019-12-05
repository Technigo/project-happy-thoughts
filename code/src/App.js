import React, { useState, useEffect } from "react";
import { Thoughts } from "Thoughts";
import { Form } from "./Form";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [postMessage, setPostMessage] = useState("");

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => {
        console.log("json", json);
        setThoughts(json);
      });
  }, [postMessage]);

  /*
  const handleHeartClick = () => {
    fetch("https://technigo-thoughts.herokuapp.com/THOUGHT_ID/like", {
      method: "POST"
    })
      .then(res => res.json())
      .then(json => {
        console.log("json", json);
      });
  };
  */

  const handleFormSubmit = message => {
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" }
    }).then(() => setPostMessage(message));
  };

  return (
    <div>
      <Form submitForm={handleFormSubmit} />

      <div>
        {thoughts.map(thought => (
          <Thoughts key={thought.id} thought={thought} />
        ))}
      </div>
    </div>
  );
};

/*
<form>
        <h4>What's making you happy right know?</h4>
        <textarea
          rows="4"
          minLength="5"
          maxLength="60"
          required
          onChange={e => {
            setMessage(e.target.value);
          }}
        />

        <br />
        <button type="submit" onClick={handleFormSubmit}>
          Send happy Thought
        </button>
      </form>

      */
