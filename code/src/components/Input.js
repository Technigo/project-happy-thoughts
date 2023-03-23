/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-unused-vars */
import React from 'react';

export const Input = ({ newPost, setNewPost, thoughts, setThoughts }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newPost })
    };

    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then((newThought) => {
        console.log(newThought);
        setThoughts((prevThoughts) => [newThought, ...prevThoughts]);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="thoughts">
          Whats making you happy right now?
          <input
            name="thoughts"
            type="text"
            value={newPost}
            onChange={(e) => {
              setNewPost(e.target.value);
            }}
          />
        </label>
        <button type="submit"> ❤️ Send happy thought ❤️</button>
      </form>
    </div>
  );
};
