import React, { useState, useEffect } from "react";
import { Hearts } from "react-loader-spinner";

import Header from "components/Header";
import ThoughtForm from "components/ThoughtForm";
import ThoughtCards from "components/ThoughtCards";

const Entry = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchThoughts = () => {
    setLoading(true)
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
      .then(res => res.json())
      .then(thoughts => setThoughts(thoughts))
      .catch(error => console.error("error:", error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchThoughts()
  }, []);

  const handleLikes = (id) => {
    const updatedLikes = thoughts.map((thought) => {
      if (thought._id === id) {
        thought.hearts += 1;
      }
      return thought;
    })
    setThoughts(updatedLikes);
  };

  if (loading) {
    return (
      <div className="loader">
        Loading happy thoughts
        <Hearts ariaLabel="loading-indicator" color="#f21e1e" height={80} width={80} />
      </div>
    )
  }

  return (
    <div className="app-container">
      <Header />
      <main>
        <ThoughtForm setThoughts={setThoughts} />
        {thoughts.map(thought => (
          <article key={thought._id} className="thought-cards cards">
            <ThoughtCards
              handleLikes={handleLikes}
              id={thought._id}
              thought={thought}
              setThoughts={setThoughts} />
          </article>
        ))}
      </main>
    </div>
  )
};

export default Entry;
