
import React, { useEffect, useState } from 'react';

import { NewThought } from 'components/NewThought';
import { ThoughtList } from 'components/ThoughtList';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const handleNewThoughtsChange = (event) => {
    setNewMessage(event.target.value)
  }
  const fetchThoughts = () => {
    setLoading(true)
    fetch('https://project-happy-thoughts-api-7irwn4hbpa-lz.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newMessage
      })
    }

    fetch('https://project-happy-thoughts-api-7irwn4hbpa-lz.a.run.app/thoughts', options)
      .then((response) => response.json())
      .then(console.log('Posted :)'))
      .then(() => fetchThoughts())
      .finally(() => setNewMessage(''));
  }
  /* like-button */
  const onLikesIncrease = (thoughtId) => {
    const options = { method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      } }

    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`, options)
      .then((res) => res.json())
      .then(console.log('Post liked :)'))
      .catch((error) => console.error(error))
      .finally(() => fetchThoughts())
  }

  return (
    <div className="main-container">
      <div className="thoughts">
        <NewThought
          newMessage={newMessage}
          handleNewThoughtsChange={handleNewThoughtsChange}
          onFormSubmit={onFormSubmit} />
        <ThoughtList
          loading={loading}
          thoughts={thoughts}
          onLikesIncrease={onLikesIncrease} />
      </div>
    </div>
  );
};
