import React, { useState } from 'react';

import ThoughtsList from "./components/ThoughtsList";
import ThoughtInput from "./components/ThoughtInput";
import { THOUGHTS_URL } from "./urls";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [input, setInput] = useState("");

  const fetchThoughts = () => {
    fetch(THOUGHTS_URL)
      .then(res => res.json())
      .then(data => setThoughts(data.reverse()));
    // useEffect(() => {
    //   fetch(THOUGHTS_URL)
    //     .then(res => res.json())
    //     // .then(json => console.log(json))
    //     .then(json => setThoughts(json));

    // }, [])
  }

  const handleInputChange = (newInput) => {
    setInput(newInput);
  };

  return (
    <div className="app-container">
      <h1>Happy thoughts</h1>
      <ThoughtInput
        inputText={input}
        onInputChange={handleInputChange}
      />
      <ThoughtsList
        thoughtsArray={thoughts}
      />
    </div>
  )
}
