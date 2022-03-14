import React, { useEffect, useState } from "react";
import ThoughtForm from "./ThoughtForm";
import ThoughtCard from "./ThoughtCard";
import Spinner from "./Spinner";
import { API_URL, LIKES_URL } from "../utils/urls";

const Main = () => {

  /* ----- useStates ------ */
  const [thoughts, setThoughts] = useState([]); // Square brakets for storing the data we fetch inside an array (an array of objects)
  const [newThought, setNewThought] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');

  /* ----- useEffect ------ */
  // It renders after the component gets mounted and it calls the API that gets the info about the messages (object) 
  // The dependency is empty, so this useEffect will be triggered just after the component gets mounted for the first time.
  useEffect(() => {
    fetchThoughts();
  }, []);

  /* ----- ALL FUNCTIONS DECLARATIONS ------ */

 // 1- Function that fetches the API and stores the data in the thoughts state (get http method)
  const fetchThoughts = () => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data)) 
      .finally(() => setLoading(false));
  };

  // 2- Function that fetches the API with a post request for sending the message and the author (post http method)
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought, author: name }), //JSON.stringify converts JS into JSON.
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts(); // Calling again the function that fetches the API and stores the updated data in the thoughts state 
        setNewThought(''); // This clears the textarea for a new input
				setName(''); // This clears the name from the input
      });
  };

  // 3- Function for the likes; adds 1 like by pressing the heart (post http method and passind the id as path params)
  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: "POST",
    };

    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts(); // Calling again the function that fetches the API and stores the updated data in the thoughts state,in this case, about the likes  
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

