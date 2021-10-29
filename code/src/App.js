import React, { useEffect, useState } from "react";
import moment from "moment";
import ThoughtForm from "./components/ThoughtForm";
import { API_URL, LIKES_URL } from "./utils/urls";

export const App = () => {
  /* useStates */
  const [thoughts, setThoughts] = useState([]); //It b
  const [newThought, setNewThought] = useState(""); // It being used in the form to send the new message

  /* useEffects: it renders after the component gets mounted */
  useEffect(() => {
    fetchThoughts();
  }, []);

  console.log(thoughts);

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  };

  /* 1-Function for the submit Form to be able to send the new message */
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        // setThoughts([data, ...thoughts]);
        fetchThoughts();
      });
  };

  /* 2-Function for the onClick button in the Form */
  // const onChangebtn = (e) => {
  //   setNewThought(e.target.value);
  // };

  /* 3-Function for the likes */
  const onLikesIncrease = (thoughtId) => {
    const options = {
      method: "POST",
    };

    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        //increase likes only
        // const updatedThoughts = thoughts.map((item) => {
        //   if (item._id === data._id) {
        //     item.hearts += 1;
        //     return item;
        //   } else {
        //     return item;
        //   }
        // });

        // setThoughts(updatedThoughts);

        fetchThoughts();
      });
  };

  return (
    <div>
      <ThoughtForm
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />

      {thoughts.map((thought) => (
        // here we are mapping though the thoughts variable, which is filled with the array of objects
        
      ))}
    </div>
  );
};
