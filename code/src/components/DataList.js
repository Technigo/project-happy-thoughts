import React from 'react';
import SingleThought from './SingleThought';

const DataList = ({ loading, setLoading, happyThoughtsList, setHappyThoughtsList }) => {
  const updateList = (thought) => {
    setLoading(true)
    const options = {
      method: 'POST'
    };

    console.log('options', options);
    // eslint-disable-next-line no-underscore-dangle
    fetch(`https://project-happy-thoughts-api-hu2xbjrrma-lz.a.run.app/thoughts/${thought._id}/like`, options)
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

        if (loading) {
          return (<h2>loading in process...</h2>);
        }

        // set the updated thoughts list
        setHappyThoughtsList(updatedThoughtsList);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
        console.log('heart count increased')
      });
  };

  const heartCountClick = (thought) => {
    console.log('like-click')
    updateList(thought);
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
