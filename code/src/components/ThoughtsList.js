/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';

// eslint-disable-next-line no-unused-vars
const ThoughtsList = ({ loading, thoughtsList, setThoughtsList, onLikesIncrease }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }

  return (
    <section className="thoughtWrapper">
      <div>
        {thoughtsList.reverse().map((thought) => (
        // eslint-disable-next-line no-underscore-dangle
          <div className="thoughtContainer" key={thought._id}>
            <h4>{thought.message}</h4>
            <div className="cardFooter">
              <div className="heartCount">
                <button className="heartButton" type="button">❤️</button>
                <p>x {thought.hearts}</p>
              </div>
              <p className="createdAt">{formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ThoughtsList;
