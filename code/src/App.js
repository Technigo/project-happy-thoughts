import React, { useState, useEffect } from "react";

import { ThoughtsList } from "./ThoughtsList";
import { ThoughtsForm } from "./ThoughtsForm";
import { THOUGHTS_URL } from "./urls";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [sort, setSort] = useState("newest");

  useEffect(() => {
    fetchThoughts();
    // eslint-disable-next-line
  }, [sort]);

  const fetchThoughts = () => {
    fetch(`${THOUGHTS_URL}?sort=${sort}`)
      .then(res => res.json())

      .then(data => setThoughts(data));
  };

  const reachThoughtInput = (message, username) => {
    fetch(THOUGHTS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, username }),
    })
      .then(() => fetchThoughts())
      .catch(error => console.log(error));
  };

  const onLiked = thoughtId => {
    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1;
      }
      return thought;
    });
    setThoughts(updatedThoughts);
  };

  return (
    <main className="main-container">
      <ThoughtsForm onThoughtChange={reachThoughtInput} />
      <section className="sort-button-section">
        <button className="sort-button" onClick={() => setSort("hearts")}>
          Most Likes
        </button>
        <button className="sort-button" onClick={() => setSort("oldest")}>
          Oldest
        </button>
        <button className="sort-button" onClick={() => setSort("newest")}>
          Recent
        </button>
      </section>
      {thoughts.map(thought => (
        <ThoughtsList
          key={thought._id}
          message={thought.message}
          username={thought.username}
          onLiked={onLiked}
          hearts={thought.hearts}
          id={thought._id}
          createdAt={thought.createdAt}
        />
      ))}
    </main>
  );
};
