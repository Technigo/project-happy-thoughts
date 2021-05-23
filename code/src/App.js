import React, { useState, useEffect } from "react";
import { PostHappyThought } from "./components/PostHappyThought";
import { ThoughtList } from "./components/ThoughtList";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  const [postedMessage, setPostedMessage] = useState("");

  useEffect(() => {
    fetch("https://happy-thoughts-by-nazanin.herokuapp.com/api/thoughts", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        setThoughts(json);
      })
      .catch((error) => console.error("Error:", error));
  }, [postedMessage]);

  const onFormSubmit = (message) => {
    setPostedMessage(message);
  };

  const onLiked = (thoughtId) => {
    console.log("Logging in the APP.js", thoughtId);
    // just to check that the func is being called and has the id
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === thoughtId) {
        thought.hearts += 1;
      }
      return thought;
    });
    setThoughts(updatedThoughts);
  };

  return (
    <div className="container">
      <main>
        <PostHappyThought onFormSubmit={onFormSubmit} />
        {thoughts.map((thought) => (
          <ThoughtList key={thought._id} thought={thought} onLiked={onLiked} />
        ))}
      </main>

      <footer>
        <p> NAZANIN </p>
      </footer>
    </div>
  );
};
