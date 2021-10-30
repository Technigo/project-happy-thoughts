import React, { useEffect, useState } from "react";
import ThoughtForm from "./ThoughtForm";
import ThoughtCard from "./ThoughtCard";
import Spinner from "./Spinner";
import { API_URL, LIKES_URL } from "../utils/urls";

const Main = () => {
  /* useStates */
  const [thoughts, setThoughts] = useState([]); //It b
  const [newThought, setNewThought] = useState(""); // It being used in the form to send the new message
  const [loading, setLoading] = useState(false);

  /* useEffects: it renders after the component gets mounted */
  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .finally(() => setLoading(false));
  };

  /* Function for the submit Form to be able to send the new message */
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
        fetchThoughts();
      });
  };

  /* Function for the likes */
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
    <>
      {loading && <Spinner />}

      <ThoughtForm
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />

      {thoughts.map((thought) => (
        <ThoughtCard
          key={thought._id}
          thought={thought}
          onLikesIncrease={handleLikesIncrease}
        />
      ))}
    </>
  );
};
export default Main;
