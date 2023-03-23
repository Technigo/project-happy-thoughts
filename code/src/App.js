/* eslint-disable no-use-before-define */
/* eslint-disable arrow-parens */
/* eslint-disable operator-linebreak */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
import React, { useState, useEffect } from 'react';
import NewThought from 'components/NewThought'
import HappyThoughtTrain from 'components/HappyThoughtTrain'

export const App = () => {

  const [happyThoughtTrain, setHappyThoughtTrain] = useState([]);
  const [newThought, setNewThought] = useState('');
  const [loading, setLoading] = useState(true);
  
  const fetchMessage = () => {
    setLoading(false);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((result) => result.json())
      .then((json) => setHappyThoughtTrain(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchMessage();
  }, [newThought, happyThoughtTrain]);

  // eslint-disable-next-line no-unused-vars
  const handleNewThoughtChange = (event) => {
    console.log(event.target.value)
    setNewThought(event.target.value)
  }
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(newThought)

    const options =
{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    message: newThought
  })
}

    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchMessage())
      .catch((error) => console.error(error))
      .finally(() => setNewThought(''));
  }
  if (loading) {
    return (
      <p>PAGE IS LOADING</p>
    )
  }
  const onGiveHeartChange = (_id) => {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${_id}/like`, option) // _id is the key in API
      .then((res) => res.json())
      .then(() => fetchMessage())
  }

  return (
    <div className="container">
      <NewThought
        newThought={newThought}
        handleFormSubmit={handleFormSubmit} />
      <HappyThoughtTrain
        happyThoughtTrain={happyThoughtTrain}
        onGiveHeartChange={onGiveHeartChange} />
    </div>
  )
}