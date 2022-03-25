import React, { useEffect, useState } from "react";

import ThoughtForm from "./ThoughtForm";
import ThoughtList from "./ThoughtList";

const API_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
const LIKES_URL = (thoughtId) =>
  `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`;

const Finalpage = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setThoughts(data);
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    };

    // Fetches the data and pushes it into the array
    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts(data);
      });
    setNewThought(""); // reseting the form
  };

  const handleLikeIncrease = (thoughtId) => {
    const options = {
      method: "POST",
    };

    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts(data);
      });
  };

  return (
    <div>
      <ThoughtForm
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />
      <ThoughtList onLikeIncrease={handleLikeIncrease} thoughts={thoughts} />)
    </div>
  );
};
export default Finalpage;
