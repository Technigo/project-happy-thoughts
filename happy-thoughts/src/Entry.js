import React, { useState, useEffect } from "react";
import { Hearts } from 'react-loader-spinner'

import Header from "components/Header";
import ThoughtForm from "components/ThoughtForm";
import ThoughtCards from "components/ThoughtCards";


const Entry = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchThoughts()
  }, []);

  const fetchThoughts = () => {
    setLoading(true)
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
      .then(res => res.json())
      .then(thoughts => setThoughts(thoughts))
      .catch(error => console.log("error:", error))
      .finally(() => setLoading(false))
  }

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
      <Hearts ariaLabel="loading-indicator" color="#f21e1e" height={80} width={80} />
      <p>Loading happy thoughts...</p>
    </div>
    )
    }

  return (
    <div class="app-container">
      <Header />
      <main>
        <ThoughtForm setThoughts={setThoughts} />
        {thoughts.map(thought => (
          <ThoughtCards 
            handleLikes={handleLikes} 
            id={thought._id} 
            thought={thought}
            setThoughts={setThoughts} />
        ))}
      </main>
    </div>
  )
};

export default Entry;
