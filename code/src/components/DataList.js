/* eslint-disable no-underscore-dangle */
import React from 'react';
import SingleThought from './SingleThought';

const DataList = ({ happyThoughtsList, setHappyThoughtsList }) => {
  const heartCountClick = (thought) => {
    const options = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' }
    };

    fetch(`https://project-happy-thoughts-api-hu2xbjrrma-lz.a.run.app/thoughts/${thought._id}/like`, options)
      .then((response) => response.json())
      .then((updatedThought) => {
        console.log(updatedThought);

        // create a new array with the updated thought
        const updatedThoughtsList = happyThoughtsList.map((thoughtItem) => {
          if (thoughtItem._id === updatedThought._id) {
            thoughtItem.hearts += 1;
            return thoughtItem;
          } else {
            return thoughtItem;
          }
        });
        // set the updated thoughts list
        setHappyThoughtsList(updatedThoughtsList);
        console.log('updated thoughts list;', updatedThoughtsList)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        console.log('heart count increased')
        console.log(thought.hearts)
      });
  };

  return (
    <div className="listItems">
      {happyThoughtsList.map((thought) => (
        // eslint-disable-next-line no-underscore-dangle
        <SingleThought key={thought._id} thought={thought} onHeartClick={heartCountClick} />
      ))}
    </div>
  )
};

export default DataList;
