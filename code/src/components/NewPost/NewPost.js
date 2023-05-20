import { SendBtn } from 'components/Buttons/SendBtn/SendBtn';
import React, { useEffect, useState } from 'react';
import { Headline } from './Headline/Headline';
import './NewPost.css';

export const NewPost = ({ newPost, fetchThoughts }) => {
  const [newThought, setNewThought] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    console.log(newThought);
    if (newThought.length >= 141) {
      setErrorMessage('💔 Your message is too long. Max 140 characters 💔');
    } else {
      setErrorMessage('');
    }
  }, [newThought])

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newThought.length > 4) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: newThought })
      };

      fetch('https://project-happy-thoughts-api-kr5kua5o2a-lz.a.run.app/thoughts', options)
        .then((response) => response.json())
        .then((data) => {
          newPost(data);
          setNewThought('');
          fetchThoughts();
        })
        .catch((error) => console.log(error));
    } else if (newThought.length < 5) {
      setErrorMessage('💔 Your message is too short. Min 5 characters 💔');
    }
  }

  return (
    <section className="new-post-wrapper">
      <Headline />
      <form onSubmit={handleFormSubmit}>
        <textarea
          className="textarea"
          name="textarea"
          id="textarea"
          value={newThought}
          onChange={(event) => setNewThought(event.target.value)}
          rows="3"
          spellCheck="true"
          aria-label="Write your happy thought here"
          aria-describedby="error-message" />
        <p id="error-message" aria-live="polite" className="error-message">{errorMessage}</p>
        <div className="character-count">
          <p className="character-count-text">{newThought.length} / 140</p>
        </div>
        <SendBtn message={newThought} ariaLabel="Send your happy thought" />
      </form>
    </section>
  )
}
