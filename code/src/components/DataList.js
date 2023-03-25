import React from 'react';
import SingleThought from './SingleThought';

const DataList = ({ happyThoughtsList, setHappyThoughtsList, onHeartClick }) => {
  const heartCountClick = (thought) => {
    onHeartClick(thought)
    console.log('like-click')
    const options = {
      method: 'POST'
    };

    console.log('options', options);
    // eslint-disable-next-line no-underscore-dangle
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`, options)
      .then((response) => response.json())
      .then((updatedThought) => {
        console.log(updatedThought);

        // create a new array with the updated thought
        const updatedThoughtsList = happyThoughtsList.map((thoughtItem) => {
          // eslint-disable-next-line no-underscore-dangle
          if (thoughtItem._id === updatedThought._id) {
            return updatedThought;
          }
          return thoughtItem;
        });

        // set the updated thoughts list
        setHappyThoughtsList(updatedThoughtsList);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        console.log('heart count increased')
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
