/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */

// /////////////// IMPORT //////////////////////// //

import React from 'react';
import { formatDistance } from 'date-fns';
import './ThoughtsList.css';
import { Loading } from 'Components/Loading/Loading';

// /////////////// COMPONENT //////////////////////// //

// This functional component takes three props.
// Prop 1 = loading = if loading === true it returns a <div> "loading..." text.
// IF loading === false then the <section> is displayed.
// Prop 2 = thoughts = is the array with all thoughts that gets map:ed.
// Prop 3 = theLikeIncreaser = Inscreases the like with onClick.

export const ThoughtsList = ({ loading, thoughts, theLikeIncreaser }) => { // <-- destructured props
  if (loading) {
    return (
      <Loading />
    );
  }

  return (

    <section>
      {thoughts.map((array) => (/* Here we are mapping trough the thoughts array */
        <div className="thoughts-list-container" key={array._id}>
          <p className="thoughts-list-text">{array.message}</p>
          <div className="like-count-time-container">
            <button
              className={(array.hearts === 0 ? 'like-button' : 'unliked-button')}
              onClick={() => theLikeIncreaser(array._id)}>❤️
            </button>
            <div className="counter-time-container">
              <p className="counter">x {array.hearts}</p>
              <div className="time-div">
                <p className="time">
                  {formatDistance(new Date(array.createdAt), Date.now(), { addSuffix: true })}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}