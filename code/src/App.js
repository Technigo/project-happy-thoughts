import React, { useState } from 'react';
import DataList from 'components/DataList';
import InputForm from 'components/InputForm';

export const App = () => {
  const [happyThoughtsList, setHappyThoughtsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');
  const [charCount, setCharCount] = useState(140);

  const onHeartClick = (thought) => {
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
    <>
      <InputForm
        loading={loading}
        setLoading={setLoading}
        newThought={newThought}
        setNewThought={setNewThought}
        setHappyThoughtsList={setHappyThoughtsList}
        happyThoughtsList={happyThoughtsList}
        charCount={charCount}
        setCharCount={setCharCount} />
      <DataList happyThoughtsList={happyThoughtsList} onHeartClick={onHeartClick} />
    </>
  )
};