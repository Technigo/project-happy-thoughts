/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import moment from 'moment';
// {props.text}

// const HappyThought = (props) => {
const HappyThought = ({ thoughtId, messageText, hearts, timestamp, onHeartClick }) => {
  
  const heartButtonGrey = (
    <button
      type="submit"
      className="heart-btn-grey"
      onClick={() => onHeartClick(thoughtId)}>
      ❤️
    </button>
  );

  const heartButtonPink = (
    <button
      type="submit"
      className="heart-btn-pink"
      onClick={() => onHeartClick(thoughtId)}>
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
  // return (
  //   <div className="happy-thought-wrapper">
  //     <p>{props.text}</p>
  //     <div className="data-wrapper">
  //       <div className="likes">
  //         <p>❤️x{props.hearts}</p>
  //       </div>
  //       <div className="timestamp">
  //         <p>{moment(props.timestamp).startOf('hour').fromNow()}</p>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default HappyThought;
