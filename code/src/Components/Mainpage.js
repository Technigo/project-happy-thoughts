// here the main work will be

import React, { useState, useEffect } from "react";

export const Mainpage = () => {

  const API_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(json => setThoughts(json));
  }, []);

      return (
        <div>
          <ul>
            {thoughts.map(thought => (
            <li key={thought._id}>{thought.message}</li>
            ))}
          </ul>
        </div>
      )
}