import React from 'react';

import Heart from './Heart';
import Time from './Time';
const ThoughtsCard = (props) => {
  
  return (
    <div className="thoughts-card">
      <p className="message">{props.message}</p>
      <div className="heart-time-container">
        <Heart 
          hearts = {props.hearts} 
          id = {props.id}
          onLikesIncrease = {props.onLikesIncrease}
          />
        <Time time = {props.time}/>
      </div>
    </div>
  )
};

export default ThoughtsCard;