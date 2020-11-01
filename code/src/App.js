import React, { useState, useEffect } from 'react';

import ThoughtsList from "./components/ThoughtsList";
import ThoughtInput from "./components/ThoughtInput";
import { THOUGHTS_URL } from "./urls";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  // const [hearts, setHearts] = useState(0);

  //perform useEffect and fetch() after mounting
  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch(THOUGHTS_URL)
      .then(res => res.json())
      //updating the state below-> that's why infinite loop
      .then(data => setThoughts(data))
      .catch(error => console.error(error));
  };


  const reachNewThought = (newThought) => {

    fetch(THOUGHTS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought })
    }).then(() => fetchThoughts());
  };

  // const fetchHearts = () => {
  //   fetch(THOUGHTS_URL)
  //     .then(res => res.json())
  //     .then(data => setHearts(data))

  // };

  return (
    <div className="app-container">
      <ThoughtInput
        onNewThought={reachNewThought}
      />
      <ThoughtsList
        thoughtsArray={thoughts}
      />
    </div>
  )
}
