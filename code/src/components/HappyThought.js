/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import moment from 'moment';
// {props.text}

// const HappyThought = (props) => {
const HappyThought = ({ thoughtId, messageText, hearts, timestamp, handleHearts }) => {
  
  const heartButtonGrey = (
    <button
      type="submit"
      className="heart-btn-grey"
      onClick={() => handleHearts(thoughtId)}>
      ❤️
    </button>
  );

  const heartButtonPink = (
    <button
      type="submit"
      className="heart-btn-pink"
      onClick={() => handleHearts(thoughtId)}>
      ❤️
    </button>
  );
  
  return (
    <article className="happy-thought-card">
      <p>{messageText}</p>
      <div className="card-bottom">
        <div className="card-bottom-left">
          {hearts !== 0 ? heartButtonPink : heartButtonGrey}
          <span> x {hearts}</span>
        </div>
        <div className="card-bottom-right-timestamp">
          <p>{moment(timestamp).startOf('hour').fromNow()}</p>
        </div>
      </div>
    </article>
  );
};

export default HappyThought;
