import React from 'react';
import moment from 'moment';

const ListThoughts = ({ thoughtsList, onHeartsIncrease }) => {
    return (
        <>
          {thoughtsList.map(thought => (
              <div className="thought-box" key={thought._id}>
                <p className="thought-post">{thought.message}</p>
                <div className="details-container">
                  <button className="hearts-number" onClick={() => onHeartsIncrease(thought._id)}>
                    <div 
                      className="heart-box" 
                      style={{background: thought.hearts > 0 ? '#ffadad' : '#e9e9e9'}}>
                      <span className="like-heart" aria-label="heart-icon" role="img" >❤️</span> 
                    </div>
                    <div className="hearts-amount">
                      <span className="multiply">x </span>
                      <span className="number-of-hearts">{thought.hearts}</span>
                    </div>
                  </button>
                  <p className="time-posted">{moment(thought.createdAt).fromNow()}</p>
                </div>
              </div>
            ))}
          </>
    );
}

export default ListThoughts;