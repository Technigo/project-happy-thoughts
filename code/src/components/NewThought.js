import React from 'react';

const NewThought = ({ newThought, setNewThought, onFormSubmit, thoughts, setThoughts }) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: newThought })
  };

  fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
    .then((res) => res.json())
    .then((data) => setThoughts([data, ...thoughts]));

  return (
    <section className="new-container">
      <form onSubmit={onFormSubmit}>
        <p className="new-header">What is making you happy right now?</p>
        <textarea
          id="newThought"
          type="text"
          value={newThought}
          maxLength="140"
          onChange={(event) => setNewThought(event.target.value)} />
        <button className="send-button" type="submit">&#10084;&#65039; Send Happy Thought! &#10084;&#65039;</button>
      </form>
    </section>
  )
}
export default NewThought;