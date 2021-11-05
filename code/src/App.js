import React, { useEffect, useState } from "react";

import { API_URL } from "./urls/urls";
import Header from "./components/Header";
import Form from "./components/Form";
import ExistingThoughts from "./components/ExistingThoughts";

export const App = () => {
  const [allThoughts, setAllThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setAllThoughts(data));
  }, [allThoughts]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((newestThought) => setAllThoughts([newestThought, ...allThoughts]))
      .then(setNewThought(""));
  };

  const handleNewThought = (e) => {
    setNewThought(e.target.value);
  };

  return (
    <div className="main">
      <Header />
      <Form
        newThought={newThought}
        handleNewThought={handleNewThought}
        handleFormSubmit={handleFormSubmit}
      />

      <ExistingThoughts allThoughts={allThoughts} setAllThoughts={setAllThoughts}/>
    </div>
  );
};
