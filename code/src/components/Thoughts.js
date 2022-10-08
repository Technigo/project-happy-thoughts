/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';

const Thoughts = ({ loading, thoughts, onNewLikeSubmit }) => {
  if (loading) {
    return <p>Loading some thoughts...</p>
  }

  return (
    <section>
      {thoughts.map((thought) => (
        <div className="single-thought-container" key={thought._id}>
          <p className="thought-message">{thought.message}</p>
          <div className="like-and-time-container">

            <div className="like-container">
              <button
                type="button"
                className="like-btn"
                onClick={() => { onNewLikeSubmit(thought._id) }}
                style={{
                  background: thought.hearts >= 1 ? '#f2ccd8' : '#d5d4d5'
                }}>
                <span className="emoji" role="img" aria-label="heart-emoji">❤️</span>
              </button>

              <div className="heart-counter">
                <p>x {thought.hearts}</p>
              </div>

            </div>

            <p className="timestamp">
              {formatDistance(new Date(thought.createdAt), Date.now(), {
                addSuffix: true
              })}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Thoughts;

/*
const onThoughtLikeChange = (thought) => {
        setThoughts(thoughts => thoughts.map(singleThought => {
            if(singleThought._id === thought._id) {
                return {...singleThought, isChecked: !singleThought.isChecked};
            }
            return singleThought;
        }));
    }
    */