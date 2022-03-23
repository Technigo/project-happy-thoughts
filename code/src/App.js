import React from 'react'

import Thoughts from './components/Thoughts.js';
import Form from './components/Form.js';

export const App = () => {

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Sun is shining!' })
    })
      
    .then(res => res.json())
    .then((newThought) => console.log(newThought));
  };

  return (




    <div>
      <Form onSubmit={handleFormSubmit} />
      <Thoughts />


    </div>
  )
}
