import { SendBtn } from 'components/Buttons/SendBtn/SendBtn';
import React, { useEffect, useState } from 'react';
import { Header } from './Header/Header';
import './NewPost.css';

export const NewPost = ({ newPost, fetchThoughts }) => {
  const [newThought, setNewThought] = useState('');

  useEffect(() => {
    console.log(newThought);
    if (newThought.length >= 141) {
      window.alert('💔 Your message is too long. Max 140 characters 💔')
    }
  }, [newThought])

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newThought.length > 5) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: newThought })
      };

      fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
        .then((response) => response.json())
        .then((data) => {
          newPost(data);
          setNewThought('');
          fetchThoughts();
        })
        .catch((error) => console.log(error));
    } else if (newThought.length <= 5) {
      window.alert('💔 Your message is too short. Min 5 characters 💔');
    }
  }

  return (
    <section className="new-post-wrapper">

      <Header />

      <form onSubmit={handleFormSubmit}>
        <textarea
          name=""
          value={newThought}
          onChange={(event) => setNewThought(event.target.value)}
          cols="30"
          rows="2" />
        <SendBtn />
      </form>
    </section>
  )
}