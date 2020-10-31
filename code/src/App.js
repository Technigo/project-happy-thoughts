import React, { useState, useEffect } from 'react';

import ThoughtsList from "./components/ThoughtsList";
import ThoughtInput from "./components/ThoughtInput";
import { THOUGHTS_URL } from "./urls";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [hearts, setHearts] = useState(0);

  //perform useEffect and fetch() after mounting
  useEffect(() => {
    fetchThoughts();
  }, []);
  //server -> App.js -> ThoughtList
  const fetchThoughts = () => {
    fetch(THOUGHTS_URL)
      .then(res => res.json())
      //updating the state below-> that's why infinite loop
      .then(data => setThoughts(data))
      .catch(error => console.error(error));
  };

  //ThoughtInput -> App.js -> server -> App.js -> ThoughtList
  const reachNewThought = (newThought) => {
    // console.log(newThought);
    //2nd argument = option; without it we send GET request
    fetch(THOUGHTS_URL, {
      method: "POST",
      //obligatory to write headers in POST requests (to communicate to server what kind of info are you sending)
      headers: { "Content-Type": "application/json" },
      //our value has to be in appropriate type -> JSON -> to be recognised by the backend server
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
