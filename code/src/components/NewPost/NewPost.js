import { SendBtn } from 'components/Buttons/SendBtn/SendBtn';
import React, { useEffect, useState } from 'react';
import { Header } from './Header/Header';
import './NewPost.css';

export const NewPost = () => {
  const [newThought, setNewThought] = useState('');

  useEffect(() => {
    console.log(newThought);
    if (newThought.length >= 141) {
      window.alert('Your message is too long. Max 140 characters')
    }
  }, [newThought])

  return (
    <form className="new-post-wrapper">

      <Header />

      <div>
        <h2>{newThought}</h2> {/* REMOVE THIS LATER */}
        <textarea
          name=""
          value={newThought}
          onChange={(event) => setNewThought(event.target.value)}
          cols="30"
          rows="2" />
      </div>

      <SendBtn />

    </form>
  )
}