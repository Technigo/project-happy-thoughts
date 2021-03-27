import React from 'react';

import ThoughtsCard from './ThoughtsCard';

const ThoughtsContainer = (props) => {
   const {thoughts, onLikesIncrease} = props;
  return (
    <div className="thoughts-container"> {
      thoughts.map((thought) => 
      <ThoughtsCard
        key = {thought._id}
        id = {thought._id}
        message = {thought.message}
        hearts = {thought.hearts}
        time ={thought.createdAt}
        onLikesIncrease={onLikesIncrease}
      />
      )}
    </div>
  );
};

export default ThoughtsContainer;