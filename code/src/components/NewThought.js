
import React, { useState } from 'react';

export const NewThought = () => {
  const [newThought, setNewThought] = useState('');

  const HandleFormSubmit = (event) => {
    event.preventDefault();
    if (newThought.length < 5) {
      return alert('Uh oh! Expand your thoughts to more than 5 letters!')
    } else if (newThought.length > 140) {
      return alert('Easy Proust, max length is 140 characters!')
    } else {
      const Submit = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newThought })
      };
      fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', Submit)
        .then((response) => response.json())
        .then(() => {
          setNewThought('');
          setTimeout(() => window.location.reload(), 3000)
        })
    }
  };

  return (
    <section className="mainContainer">
      <form onSubmit={HandleFormSubmit} className="formCard">
        <label htmlFor="newThought" className="headThought">What is making you happy right now?
          <textarea
            id="newThought"
            type="text"
            placeholder="Type happiness here.."
            rows="4"
            cols="40"
            value={newThought}
            onChange={(event) => setNewThought(event.target.value)} />
        </label>
        <p className={newThought.length > 140 ? 'counter' : 'counter'}>{newThought.length} / 140</p>
        <button className="submitBtn" type="submit">
          <span>
            <span className="heart" role="img" aria-label="heart"> 🧡 </span>
            Send happy thought
            <span className="heart" role="img" aria-label="heart"> 🧡 </span>
          </span>
        </button>
      </form>
    </section>
  )
};
