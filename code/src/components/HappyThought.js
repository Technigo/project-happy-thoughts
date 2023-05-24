/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import moment from 'moment';
// {props.text}

// const HappyThought = (props) => {
const HappyThought = ({ thoughtId, text, hearts, timestamp, handleHearts }) => {
  
  const heartButtonGrey = (
    <button
      type="submit"
      className="heart-button grey-background"
      onClick={() => handleHearts(thoughtId)}>
      ❤️
    </button>
  );

  const heartButtonPink = (
    <button
      type="submit"
      className="heart-button pink-background"
      onClick={() => handleHearts(thoughtId)}>
      ❤️
    </button>
  );
  
  return (
    <article className="happy-thought-card">
      <p>{text}</p>
      <div className="card-bottom">
        <div className="card-bottom-left">
          {hearts !== 0 ? heartButtonPink : heartButtonGrey}
          <span> x {hearts}</span>
        </div>
        <div className="card-bottom-right-timestamp">
          <p>{moment(timestamp).fromNow()}</p>
        </div>
      </div>
    </article>
  );
};

export default HappyThought;
