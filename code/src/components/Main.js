import React, { useEffect, useState } from "react";
import ThoughtForm from "./ThoughtForm";
import ThoughtCard from "./ThoughtCard";
import Spinner from "./Spinner";
import { API_URL, LIKES_URL } from "../utils/urls";

const Main = () => {
  /* useStates */
  const [thoughts, setThoughts] = useState([]); 
  const [newThought, setNewThought] = useState(""); // It being used in the form to send the new message
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');

  /* useEffects: it renders after the component gets mounted */
  useEffect(() => {
    fetchThoughts();
  }, []);

/* fetching the API that renders the messages */
  const fetchThoughts = () => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .finally(() => setLoading(false));
  };

  /* Function for the submit Form to be able to send the new message */
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought, author: name }), //JSON.stringify converts it to JSON.
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts();
        setNewThought(''); // This clears the textarea for a new input
				setName('');
      });
  };

  /* Function for the likes; adds 1 like by pressing the heart */
  const handleLikesIncrease = (thoughtId) => {
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
    <>
      {loading && <Spinner />}

      <ThoughtForm
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
        name={name}
				setName={setName}
      />
     {/* mapping through the thought array and generating thought-cards */}
		 {/* sending data as props to the thought card component */}
      {thoughts.map((thought) => (
        <ThoughtCard
          key={thought._id}
          thought={thought}
          onLikesIncrease={handleLikesIncrease}
        />
      ))}
    </>
  );
};
export default Main;
