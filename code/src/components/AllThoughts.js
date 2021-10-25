import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { API_URL } from '../utils/urls';

import FormInput from './FormInput';
// import LikeButton from './LikeButton';

const AllThoughts = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);
  console.log(thoughts);

  return (
    <div>
      <FormInput thoughts={thoughts} setThoughts={setThoughts} />
      {thoughts.map((thought) => (
        <div key={thought._id}>
          <p>{thought.message}</p>
          {/* <LikeButton thought={thought} /> */}
          <button
            type='button'
            // onClick={(event) => onLikeButtonClick(event)}
          >
            &hearts; {thought.hearts}
          </button>

          <p>Posted: {moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  );
};

export default AllThoughts;
