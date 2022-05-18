import React, { useState, useEffect } from "react";
import { ThoughtsList } from "components/ThoughtsList";
import { ThoughtsForm } from "components/ThoughtsForm";

export const App = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessages, setNewMessages] = useState("");

  useEffect(() => {
    fetchList();
  }, [[], thoughts]);

  const fetchList = () => {
    setLoading(true);
    fetch("https://happy-thoughts-apiii.herokuapp.com/thoughts")
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        message: newMessages,
      }),
    };

    fetch("https://happy-thoughts-apiii.herokuapp.com/thoughts", options)
      .then((res) => res.json())
      .then((data) => {
        fetchList();
        setNewMessages("");
      });
  };

  const handleLikes = (thoughtId) => {
    const options = {
      method: "POST",
    };

    fetch(
      `https://happy-thoughts-apiii.herokuapp.com/thoughts/${thoughtId}/like`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        fetchList();
      });
  };

  return (
    <div>
      {loading}
      <ThoughtsForm
        onFormSubmit={handleFormSubmit}
        newMessages={newMessages}
        setNewMessages={setNewMessages}
      />

      {list.map((thoughts) => (
        <ThoughtsList
          key={thoughts._id}
          thoughts={thoughts}
          onLikes={handleLikes}
        />
      ))}
    </div>
  );
};
