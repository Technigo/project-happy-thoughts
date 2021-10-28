import React, { useState, useEffect } from "react";
import { API_URL } from "./utilis/urls";
import { LIKE_URL } from "./utilis/urls";
import Form from "components/Form";
import Thoughts from "./components/Thoughts";
import LoadingItem from "components/LoadingItem";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .catch((err) => {
        console.log("error:", err.message);
      })
      .finally(() => setLoading(false));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(API_URL, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        fetchThoughts();
        if (data.errors) {
          throw Error(data.errors.message.message);
        }
        console.log(data);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
    setNewThought("");
  };

  const onLikeSubmit = (id) => {
    const likes = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };

    fetch(LIKE_URL(id), likes)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts();
      })
      .catch((err) => {
        console.log("error:", err.message);
      });
  };

  return (
    <div className="content-wrapper">
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
      {loading && <LoadingItem />}
      <Form
        setNewThought={setNewThought}
        onFormSubmit={onFormSubmit}
        newThought={newThought}
      />
      {thoughts.map((thought) => (
        <Thoughts
          key={thought._id}
          thoughts={thought}
          onLikeSubmit={onLikeSubmit}
        />
      ))}
    </div>
  );
};
