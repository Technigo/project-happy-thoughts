import React from 'react';

// import styles from './ThoughtsFeed.module.css';

// import { LikeButton } from './components/LikeButton/LikeButton';

const ThoughtsFeed = ({ loading, thoughtsFeed, setThoughtsFeed }) => {
  if (loading) {
    return <h1>Loading...</h1>
  }

  const on
  return (
    <><div className={thoughtContainer}>
      <h2>Testing PostedThought component {props}</h2>
    </div><div className={likesAndTime}>
      <p> {amountOfLikes}</p>
      <p> {timePosted}</p>
    </div>
    </>
  );
};

export default ThoughtsFeed;