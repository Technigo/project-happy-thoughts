import React, { useEffect, useState } from "react";

import { API_URL, LIKE_URL } from "./utils/urls";
import ThoughtsItem from "./components/ThoughtsItem";
import ThoughtsForm from "./components/ThoughtsForm";
import LoadingItem from "./components/LoadingItem";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    setError(null);
    setLoading(true);
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data");
        }
        return res.json();
      })
      .then((data) => setThoughts(data))
      .finally(() => setLoading(false))
      .catch((err) => {
        setError(err.message);
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

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        setNewThought("");
        fetchThoughts();
      });
  };

  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: "POST",
    };

    fetch(LIKE_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts();
      });
  };

  return (
    <div className="main-container">
      {error && <div> {error} </div>}
      {loading && <LoadingItem />}
      <ThoughtsForm
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />

      {thoughts.map((thought) => (
        <ThoughtsItem
          key={thought._id}
          thought={thought}
          onLikesIncrease={handleLikesIncrease}
        />
      ))}
    </div>
  );
};
