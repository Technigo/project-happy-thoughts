import React, { useEffect, useState } from "react";

import ThoughtForm from "./components/ThoughtForm";
import ThoughtItem from "./components/ThoughtItem";
import Loading from "./components/Loading";

import { API_URL, LIKES_URL } from "./utils/urls";

export const App = () => {
  // state properties that keep track of the list of thoughts, the new thought and the loading value
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  const [loading, setLoading] = useState(false);

  // useEffect hook for GET request when component is mounted
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

  // makes a POST request to the same URL
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    };

    // sends request to add new thought and then fetches the thoughts again
    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts();
      });
  };

  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: "POST",
    };

    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        // calls the fetchThoughts function to update the likes (amount of hearts) for the message

        fetchThoughts();
      });
  };

  // displays the information on the page
  return (
    <div>
      {loading && <Loading />}
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
