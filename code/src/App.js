import React, { useEffect, useState } from "react";

import { ThoughtsFeed } from "./components/js/ThoughtsFeed.js";
import { ThoughtsInput } from "./components/js/ThoughtsInput.js";
import { Header } from "./components/js/Header";
import { Footer } from "./components/js/Footer";

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
      <Header />
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
      <Footer />
    </main>
  );
};
