import React, { useState, useEffect } from 'react';
import ThoughtList from 'components/ThoughtList';
import ThoughtForm from 'components/ThoughtForm';

export const App = () => {
  const [thoughtList, setThoughtList] = useState([]);
  const [newThought, setNewThought] = useState('');
  // const [like, setLike] = useState();

  const fetchData = () => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((transformedData) => setThoughtList(transformedData))
      .catch((error) => console.error(error))
      .finally(() => console.log('everything is fine in fetch'));
  }
  useEffect(() => {
    fetchData();
  }, []);

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: newThought
      }),
      headers: {
        'Content-Type': 'application/json'
      }

    }
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((data) => data.json())
      .then(() => fetchData())
      .catch((error) => console.error(error))
      .finally(() => setNewThought(''));
  }

  return (
    <div className="wrapper">
      <ThoughtForm
        handleFormSubmit={handleFormSubmit}
        newThought={newThought}
        onNewThoughtChange={onNewThoughtChange} />
      <ThoughtList
        thought={thoughtList} />
    </div>
  )
}
