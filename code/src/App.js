import React, { useState } from 'react';

import ThoughtsList from "./ThoughtsList";
import ThoughtInput from "./ThoughtInput";

export const App = () => {
  const [input, setInput] = useState("");

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
      <ThoughtsList />
    </div>
  )
}
