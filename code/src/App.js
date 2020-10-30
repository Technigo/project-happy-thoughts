import React, { useEffect, useState } from "react";

import { ThoughtsFeed } from "components/ThoughtsFeed.js";
import { ThoughtsInput } from "components/ThoughtsInput.js";

const URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [happyMessage, setHappyMessage] = useState("");

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, [happyMessage]);

  const onFormSubmit = (message) => {
    setHappyMessage(message);
  };

  const onLiked = (thoughtId) => {
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === thoughtId) {
        thought.hearts += 1;
      }
      return thought;
    });
    setThoughts(updatedThoughts);
  };

  return (
    <main>
      <ThoughtsInput onFormSubmit={onFormSubmit} />
      {thoughts.map((thought) => (
        <ThoughtsFeed
          key={thought._id}
          heartId={thought._id}
          onLiked={onLiked}
          heart={thought.hearts}
          createdAt={thought.createdAt}
          thought={thought.message}
        />
      ))}
    </main>
  );
};
