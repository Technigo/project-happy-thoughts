import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Likeathought } from 'Components/Likeathought';
import 'styles/happythoughts.css';

export const ThoughtsList = () => {
  const THOUGHTS_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  const [thoughts, setThoughts] = useState([]);
  // Use [] in the useState since it is an array that we get in the get-request
  const [addThought] = useState("");

  useEffect(() => {
    fetch(THOUGHTS_URL)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
      // Sort the messages on time passed since message sent, from a to b
      data.sort(function(a, b) {
        return a - b;
      });

      // Filter out if any thoughts are empty
      const filteredThoughts = data.filter((thought) => thought.message);

      // Chooses to 'call' the filteredThoughts. 
      setThoughts(filteredThoughts);
    });
  }, [addThought]);
  
  // Updates the 'hearts' when thoughts are liked
  const onThoughtLiked = (id) => {
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === id) {
        thought.hearts += 1;
      }
      return thought;
    })
    setThoughts(updatedThoughts);
  };

  return (
    <div>
      {thoughts.map(thought => {
        return (
          <div className="thoughts-box" key={thought._id}>
            <p className="thoughts" tabIndex="0">
              {thought.message}
            </p>
            <div className="thoughts-footer">
              <Likeathought 
                key={thought._id}
                id={thought._id}
                onThoughtLiked={onThoughtLiked}
                hearts={thought.hearts}
              />
              <p className="time-stamp" tabIndex="0"> 
                {moment(thought.createdAt).fromNow()}
              </p> 
            </div>
          </div>
        );
      })}
    </div>
  );
};