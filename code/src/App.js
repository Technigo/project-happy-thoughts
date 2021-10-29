import React, { useEffect, useState } from "react";
import ThoughtForm from "./components/ThoughtForm";
import ThoughtItem from "./components/ThoughtItem";
import LoadingItem from "./components/LoadingItem";
import { API_URL, LIKES_URL } from "./utils/urls";

export const App = () => {
  /* useStates */
  const [thoughts, setThoughts] = useState([]); //It b
  const [newThought, setNewThought] = useState(""); // It being used in the form to send the new message
  const [loading, setLoading] = useState(false);

  /* useEffects: it renders after the component gets mounted */
  useEffect(() => {
    fetchThoughts();
  }, []);

  console.log(thoughts);

  const fetchThoughts = () => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .finally(() => setLoading(false));
  };

  /* 1-Function for the submit Form to be able to send the new message */
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        // setThoughts([data, ...thoughts]);
        fetchThoughts();
      });
  };

  /* 3-Function for the likes */
  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: "POST",
    };

    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts();
      });
  };

  return (
    <div>
      {loading &&  <LoadingItem /> }
     

      <ThoughtForm
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />

      {thoughts.map((thought) => (
        <ThoughtItem
          key={thought._id}
          thought={thought}
          onLikesIncrease={handleLikesIncrease}
        />

      ))}
    </div>
  );
};
