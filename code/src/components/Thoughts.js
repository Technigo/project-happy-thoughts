import React from 'react';
import { formatDistance } from 'date-fns';

const Thoughts = ({ loading, thoughts }) => {
  if (loading) {
    return <p>Loading some thoughts...</p>
  }

  return (
    <section>
      {thoughts.map((thought) => (
        <div className="single-thought-container" key={thought._id}>
          <p>{thought.message}</p>
          <div className="like-and-time-container">

            <div className="like-container">
              <button
                className="like-btn"
                onClick={() => onThoughtLikeChange(thought._id)}
                type="button">
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