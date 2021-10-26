import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { API_URL } from './../utils/urls.js';

const GetThought = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);

  return (
    <div>
      {thoughts.map((thought) => {
        return (
          <div key={thought._id}>
            <p>{thought.message}</p>
            <button> &hearts; {thought.hearts}</button>
            <p className="date">
              -Created at: {moment(thought.createdAt).fromNow()}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default GetThought;
