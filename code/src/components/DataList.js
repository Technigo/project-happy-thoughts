/* eslint-disable no-underscore-dangle */
import React from 'react';

const DataList = ({ happyThoughtsList, setHappyThoughtsList }) => {
  const getTimestamp = (createdAt) => {
    const date = new Date(createdAt);
    const timeDiff = Math.round((new Date() - date) / (1000 * 60));
    if (timeDiff < 1) {
      return 'just now';
    } else if (timeDiff < 90) {
      return `${timeDiff} min ago`;
    } else if (timeDiff < 4320) {
      const hoursDiff = Math.round(timeDiff / 60);
      return `${hoursDiff} hour${hoursDiff > 1 ? 's' : ''} ago`;
    } else if (timeDiff < 10000) {
      const daysDiff = Math.round(timeDiff / 1440);
      return `${daysDiff} day${daysDiff > 1 ? 's' : ''} ago`;
    } else {
      const weeksDiff = Math.round(timeDiff / 10080);
      return `${weeksDiff} week${weeksDiff > 1 ? 's' : ''} ago`;
    }
  };

  const heartCountClick = (thought) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    };

    fetch(`https://project-happy-thoughts-api-hu2xbjrrma-lz.a.run.app/thoughts/${thought._id}/like`, options)
      .then((response) => response.json())
      .then((updatedThought) => {
        console.log('updated thought:', updatedThought);

        // create a new array with the updated thought
        const updatedThoughtsList = happyThoughtsList.map((like) => {
          if (like._id === updatedThought.response._id) {
            like.hearts += 1;
            return like;
          } else {
            return like;
          }
        });
        // set the updated thoughts list
        setHappyThoughtsList(updatedThoughtsList);
        console.log('updated thoughts list;', updatedThoughtsList)
        console.log('number of hearts:', updatedThought.hearts)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        console.log('heart count increased')
      });
    console.log(Array.isArray(happyThoughtsList)); // true if happyThoughtsList is an array
  };

  return (
    <div className="listItems">
      {happyThoughtsList.map((thought) => (
        <div className="singleListItem" key={thought._id}>
          <h3 id="stretched">{thought.message}</h3>
          <div className="buttonTimestampBox">
            <div className="heartCounter">
              <button onClick={() => heartCountClick(thought)} type="button">
                <span id="heartButton">🧡</span>
              </button>
              <span> x {thought.hearts}</span>
            </div>
            <p className="timeStamp">{getTimestamp(thought.createdAt)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataList;
