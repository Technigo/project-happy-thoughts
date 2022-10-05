/* eslint-disable quote-props */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import ThoughtList from 'components/ThoughtList';
import ThoughtForm from 'components/ThoughtForm';

export const App = () => {
  const [thoughtList, setThoughtList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  useEffect(() => {
    fetchThought();
  }, []);

  const fetchThought = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughtList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // eslint-disable-next-line quotes
        message: 'have a good day'
      })
    }
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', option)
      .then((res) => res.json())
      .then(() => fetchThought())
      .finally(() => setNewThought(''))
  }
  return (
    <div>
      <ThoughtForm
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChange}
        onFormSubmit={onFormSubmit} />
      <ThoughtList
        loading={loading}
        thoughtList={thoughtList}
        setThoughtList={setThoughtList} />
    </div>
  );
}
