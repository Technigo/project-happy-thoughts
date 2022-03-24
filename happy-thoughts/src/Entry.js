import React, { useState, useEffect } from "react";

import Header from "components/Header";
import ThoughtForm from "components/ThoughtForm";
import ThoughtCards from "components/ThoughtCards";

const Entry = () => {
  const [thoughts, setThoughts] = useState([]);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
      .then(res => res.json())
      .then(thoughts => setThoughts(thoughts))
      .catch(error => console.log("error:", error))
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

  return (
    <>
      <Header />
      <main>
        <ThoughtForm setThoughts={setThoughts} />
        {thoughts.map(thought => (
          <ThoughtCards 
            handleLikes={handleLikes} 
            setLikes={setLikes} 
            id={thought._id} 
            thought={thought} 
            setThoughts={setThoughts} />
        ))}
      </main>
    </>
  )
};

export default Entry;
