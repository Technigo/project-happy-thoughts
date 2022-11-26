/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';

import HappyList from 'components/HappyList';
import NewThought from 'components/NewThought';

export const App = () => {
  const [happyList, setHappyList] = useState([]);
  const [newThought, setNewThought] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchMessage = () => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((result) => result.json())
      .then((json) => setHappyList(json))
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchMessage();
  }, [newThought, happyList]);

  // will trigger first when app starts, and every time the variable in the dependency array changes

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      })
    }
    // setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
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
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <NewThought
          newThought={newThought}
          handleFormSubmit={handleFormSubmit}
          onNewThoughtChange={onNewThoughtChange} />
        <HappyList
          happyList={happyList} />
      </div>
    </div>
  );
}