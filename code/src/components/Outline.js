import React, { useState, useEffect } from 'react';
import Form from './Form';

const Outline = () => {
  const [thoughts, setThoughts] = useState([])

  /* Global Api */
  useEffect(() => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((json) => setThoughts(json))
  }, [])

  return (
    <section className="container">
      <Form />
    </section>
  )
};

export default Outline;
