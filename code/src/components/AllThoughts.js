import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { API_URL } from '../utils/urls';

import Header from './Header';
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
    <div className='thoughts-container'>
      <Header />
      <FormInput thoughts={thoughts} setThoughts={setThoughts} />
      {thoughts.map((thought) => (
        <div key={thought._id} className='thought-card'>
          <p className='thought-text'>{thought.message}</p>
          {/* <LikeButton id={thought._id} /> */}
          <div className='thought-card-info'>
            <div className='like-info'>
              <button
                type='button'
                className='like-button'
                // onClick={(event) => onLikeButtonClick(event)}
              >
                <span className='like-heart'>❤️</span>
              </button>
              <p className='thought-card-info-text'>x {thought.hearts}</p>
            </div>

            <p className='thought-card-info-text'>
              Posted: {moment(thought.createdAt).fromNow()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllThoughts;
