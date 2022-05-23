import React, { useState, useEffect } from "react";

import Recent from "./Recent";
import Create from "./Create";

const Form = () => {
  const [newThought, setnewThought] = useState("");
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    setLoading(true);
    fetch("https://thereese-happy-thoughts.herokuapp.com/thoughts")
      .then((res) => res.json())
      .then((json) => setThoughts(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleNewThoughtChange = (event) => {
    setnewThought(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: newThought,
      }),
    };

    fetch("https://thereese-happy-thoughts.herokuapp.com/thoughts", options)
      .then((res) => res.json())
      .then((data) => fetchThoughts())
      .finally(() => setnewThought(""));
  };

  const handleLikeIncrease = (thoughts_id) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };

    fetch(
      `https://thereese-happy-thoughts.herokuapp.com/thoughts/${thoughts_id}/like`,
      options
    )
      .then((res) => res.json())
      .then(() => {
        fetchThoughts();
      });
  };

  return (
    <div className="form-box">
      <Create
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChange}
        onFormSubmit={handleFormSubmit}
      />
      <Recent
        loading={loading}
        thoughts={thoughts}
        onLikeIncrease={handleLikeIncrease}
      />
    </div>
  );
};

export default Form;
