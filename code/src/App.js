import React, { useState, useEffect } from "react";

import SendThought from "./components/SendThought";
import ThoughtMessage from "./components/ThoughtMessage";
import Footer from "./components/Footer";
import LoadingCircle from "./components/LoadingCircle";
import { API_URL, LIKES_URL } from "./utils/urls";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
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
      .then((data) => fetchThoughts())
      .finally(() => setNewThought(""));
  };

  const handleClickHeart = (thoughtId) => {
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
    <main>
      {loading && <LoadingCircle />}
      <SendThought
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />
      {thoughts.map((thought) => (
        <ThoughtMessage
          key={thought._id}
          thought={thought}
          onClickHeart={handleClickHeart}
        />
      ))}
      <Footer />
    </main>
  );
};
