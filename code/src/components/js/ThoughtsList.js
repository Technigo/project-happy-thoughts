import React, { useEffect, useState } from "react"
import moment from "moment" 

import "../css/thoughtslist.css"

export const ThoughtsList = () => {
  // Turning it to a const so it's not just a string like it was from start fetch("https.."). 
  // It's also better to make it a const if you gonna fecth more things etc.
  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts" 
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => { // useEffect only render; 1. the first time the function executes 2. when something new happens (a new thought is created).
    fetch(MESSAGES_URL)
      .then((res) => { // Res = response from server (api) 
        return res.json();  // Transforms the API to readable data by using json
      })
      .then((data) => { // With this .then it applies the readable data
        console.log(data);

        const filteredThoughts = data.filter((thought) => thought.message);  // Filters the messages that contains a message. Removes the empty inputs.
        const limitedThoughts = filteredThoughts.slice(0,20); // Limits the array to 20 objects instead of infinite.

        setThoughts(limitedThoughts);
      });
  }, []); // This is the dependency (2). When you just write an empty array you tell the useEffect to only render ones. 
          // If you write a dependency name like "message" it will render every time a new message is created.

    return ( 
      <div>
        {thoughts.map(thought => { // When using map we need to provide a unique key for every element we are returning.
          return <p className="thought-text" key={thought._id}> 
            {thought.message}
            <span className="post-time">
              {moment(thought.createdAt).fromNow()}
            </span>
          </p>;   
        })}
      </div>
    );
};