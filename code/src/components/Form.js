import React, { useEffect, useState } from 'react'

import { API_URL } from './src/utils/url';


export const Form = () => {
    const [thoughts, setThoughts] = useState([]);
    const [newThought, setNewThought] = useState('');


 const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought })
    };

  fetch(API_URL, options)
  .then((res) => res.json ())
  .then ((data) => setThoughts([data, ...thoughts]));

  };
  console.log(thoughts);


return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newThought">Type thought</label>
          <input
          id="newThought"
          type="text"
          value={newThought}
          onChange={(e) =>setNewThought(e.target.value)}
        />
        <button type="submit">Send thought!</button>
      </form>
      </div>
      )};

      export default Form;