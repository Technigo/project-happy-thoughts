import React, { useState, useEffect } from 'react';

import ThoughtsList from "./components/ThoughtsList";
import ThoughtInput from "./components/ThoughtInput";
import { THOUGHTS_URL } from "./urls";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  // const [input, setInput] = useState("");

  //perform useEffect and fetch() after mounting
  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch(THOUGHTS_URL)
      .then(res => res.json())
      //updating the state below-> that's why infinite loop
      .then(data => setThoughts(data));
  };

  const reachNewThought = (newThought) => {
    console.log(newThought);
    // setInput(newInput);
  };

  return (
    <div className="app-container">
      <h1>Happy thoughts</h1>
      <ThoughtInput
        // inputText={input}
        onNewThought={reachNewThought}
      />
      <ThoughtsList
        thoughtsArray={thoughts}
      />
    </div>
  )
}
