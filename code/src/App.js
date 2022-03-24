import React, { useState, useEffect } from 'react'

import DisplayThoughts from './components/DisplayThoughts'
import PostThoughts from './components/PostThoughts'

import { formatDistance } from "date-fns";

import './index.css';

const App = () => {

  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");

  useEffect(() => {
    fetchAllThoughts()
  }, []);


  const fetchAllThoughts = () => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
      .then((res) => res.json())
      .then((data) => setThoughts(data))
  }

  const allThoughts = thoughts.map((thought) => {

    const onLikeClickValueChange = () => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: newThought
        })
      };

      fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thought._id}/like`, options)
        .then((res) => res.json())
        .then(() => {
          fetchAllThoughts()
        });
    }

    return <div className="thought" key={thought._id}>
      <p>{thought.message}</p>
      <div className="likes-wrapper">
        <div className="heart-icon-radius">
          <img onClick={onLikeClickValueChange} className="heart-icon" src="./heart-icon.png" alt="heart" />
        </div>
        <p>{thought.hearts}</p>
        <p className="date">
          {formatDistance(new Date(thought.createdAt), Date.now(), {
            addSuffix: true,
          })}
        </p>
      </div>
    </div>;
  });




  return (
    <main className="all-thoughts">
      <PostThoughts newThought={newThought} setNewThought={setNewThought} />
      <DisplayThoughts thoughts={allThoughts} />
    </main>
  );
}

export default App;