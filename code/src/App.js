import React, { useState, useEffect } from 'react';

import ThoughtsList from "./components/ThoughtsList";
import ThoughtInput from "./components/ThoughtInput";
import { THOUGHTS_URL } from "./urls";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  //perform useEffect and fetch() after mounting
  useEffect(() => {
    fetchThoughts();
  }, []);

  //ALL the FUNCTIONS
  const fetchThoughts = () => {
    fetch(THOUGHTS_URL)
      .then(res => res.json())
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

  const handleLike = (thoughtId) => {

    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        return thought.hearts += 1;
      }
      else {
        return thought;
      }
    });
    //issue below? 
    setThoughts(updatedThoughts);
  };

  return (
    <div className="app-container">
      <ThoughtInput
        onNewThought={reachNewThought}
      />
      {thoughts.map(thought => (
        <ThoughtsList
          key={thought._id}
          thought={thought}
          happyThought={thought.message}
          timeStamp={thought.createdAt}
          nrOfLikes={thought.hearts}
          onLike={handleLike}
        />
      ))}
    </div>
  )
};
