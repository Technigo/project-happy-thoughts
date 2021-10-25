import React, { useState, useEffect } from 'react';
import moment from 'moment';

import FormInput from './FormInput';

const AllThoughts = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);
  console.log(thoughts);

  return (
    <div>
      <FormInput />
      {thoughts.map((thought) => (
        <div key={thought._id}>
          <p>{thought.message}</p>
          <button> &hearts; {thought.hearts}</button>
          <p>Posted: {moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  );
};

export default AllThoughts;
