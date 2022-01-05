import React, { useEffect, useState } from "react";

import Header from "components/Header";
import MessageForm from "components/MessageForm";
import MessageList from "components/MessageList";
import LoadingItem from "./components/Loading";

import { API_URL, LIKES_URL } from "./utils/urls";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);

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

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value);
    setCounter(event.target.value.length);
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
      .then((data) => setThoughts([data.response, ...thoughts]));

    setNewThought("");
    setCounter(0);
  };

  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: "POST",
    };

    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        const updatedThoughts = thoughts.map((item) => {
          if (item._id === data._id) {
            item.hearts += 1;
            return item;
          } else {
            return item;
          }
        });

        setThoughts(updatedThoughts);
      });
  };

  return (
    <main>
      {loading && <LoadingItem />}
      <Header />
      <MessageForm
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChange}
        onFormSubmit={handleFormSubmit}
        counter={counter}
      />
      <MessageList thoughts={thoughts} onLikesIncrease={handleLikesIncrease} />
    </main>
  );
};
