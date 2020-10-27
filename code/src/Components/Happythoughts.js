import React, { useEffect, useState } from 'react';
import moment from 'moment';

import 'styles/happythoughts.css';

export const Happythoughts = () => {
  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  const [thoughts, setThoughts] = useState([]);
  // Use [] in the useState since it is an array that we get in the get-request
  
  useEffect(() => {
    fetch(MESSAGES_URL)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
      console.log(data);
      // Sort the messages time while from a to b
      data.sort(function(a, b) {
        return a - b;
      });

      // Filter out if any thoughts are empty
      const filteredThoughts = data.filter((thought) => thought.message);

      setThoughts(filteredThoughts);
    });
  }, []);
  // If we want we can put the fetch in another separate component

  return (
    <div>
      {thoughts.map(thought => {
        return (
          <div className="thoughts-box">
            <p className="thoughts" key={thought._id}>
              {thought.message}
            </p>
            <div className="time-wrapper">
              <p className="time-stamp"> 
                {moment(thought.createdAt).fromNow()}
              </p> 
            </div>
          </div>
        );
      })}
    </div>
  );
};