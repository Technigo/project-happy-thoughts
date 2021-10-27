import React, { useEffect, useState } from "react";

import ThoughtForm from "./components/ThoughtForm";
import ThoughtItem from "./components/ThoughtItem";
// import LoadingItem from "./components/Loading";

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
      .then(res => res.json())
      .then(data => setThoughts(data))
      .finally(() => setLoading(false));
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(API_URL, options)
      .then(res => res.json())
      .then(data => {
        fetchThoughts(data);
      });

    setNewThought("");
  };

  // const handleKeyPress = e => {
  //   //it triggers by pressing the enter key
  //   if (e.keyCode === 13) {
  //     handleFormSubmit();
  //   }
  // };

  const handleLikesIncrease = thoughtId => {
    const options = {
      method: "POST",
    };

    fetch(LIKES_URL(thoughtId), options)
      .then(res => res.json())
      .then(data => {
        fetchThoughts(data);
      });
  };

  return (
    <div>
      {/* {loading && <LoadingItem />} */}
      <ThoughtForm
        newThought={newThought}
        setNewThought={setNewThought}
        onFormSubmit={handleFormSubmit}
        // onKeyPress={handleKeyPress}
      />

      {thoughts.map(thought => (
        <ThoughtItem
          key={thought._id}
          thought={thought}
          onLikesIncrease={handleLikesIncrease}
        />
      ))}
    </div>
  );
};
