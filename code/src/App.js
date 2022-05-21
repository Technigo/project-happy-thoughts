import React, { useEffect, useState } from "react";
import Header from "components/Header";
import ThoughtList from "components/ThoughtList";
import ThoughtInput from "components/ThoughtInput";

const THOUGHTS_URL = "https://justine-happy-api.herokuapp.com/thoughts";
const LIKES_URL = (thoughtId) =>
  `https://justine-happy-api.herokuapp.com/thoughts/${thoughtId}/like`;

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [thought, setThought] = useState("");

  const fetchThoughts = () => {
    fetch(THOUGHTS_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  };
  const handleInputSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: thought }),
    };

    fetch(THOUGHTS_URL, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts();
      });
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  const handleLike = (thoughtId) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(LIKES_URL(thoughtId), requestOptions)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts();
      });
  };

  return (
    <section className="main">
      <Header />

      <ThoughtInput
        handleInputSubmit={handleInputSubmit}
        thought={thought}
        setThought={setThought}
      />

      {thoughts.map((oneThought) => (
        <ThoughtList
          key={oneThought._id}
          oneThought={oneThought}
          fetchThoughts={fetchThoughts}
          handleLike={handleLike}
        />
      ))}
    </section>
  );
};
