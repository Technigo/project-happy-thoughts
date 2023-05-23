/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment';

const DataList = ({ happyThoughtsList, setHappyThoughtsList }) => {
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
            {moment(thought.createdAt).fromNow()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataList;
