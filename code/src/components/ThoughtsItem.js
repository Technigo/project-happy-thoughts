import React from "react";
import moment from 'moment';

const ThoughtsItem = ({ thought, onLikesIncrease, }) => {

    return (
        <div className="thought-card">
          <p>{thought.message}</p>
          <div className="message-card-bottom-row">
            <div className="heart-likes-container">

              {thought.hearts > 0 && (
                <button className="heart-button liked" onClick={() => onLikesIncrease(thought._id)}>
                  <span role="img" aria-label="heart">❤️</span>
                </button>
              )}
              {thought.hearts === 0 && (
                <button className="heart-button" onClick={() => onLikesIncrease(thought._id)}>
                  <span role="img" aria-label="heart">❤️</span>
                </button>
              )}
             
              <div className="likes-text"> x {thought.hearts}</div>
            </div>
            <p className="date-text">{moment(thought.createdAt).fromNow()}</p>
          </div>
        </div>
    )
}

export default ThoughtsItem