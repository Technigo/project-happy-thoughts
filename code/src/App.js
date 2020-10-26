import React from 'react'
import { Form } from './components/Form'
import { HappyThoughts } from './components/HappyThoughts'

export const App = () => {
  return (
    <section className='app-content'>
      <Form />
      <HappyThoughts />
    </section>
  );
};
