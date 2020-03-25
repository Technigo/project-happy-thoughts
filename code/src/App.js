import React, { useState, useEffect } from 'react';
import { HappyThoughts } from './components/HappyThoughts';
import { Form } from './components/Form';
import './app.css';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const MESSAGES_URL = 'https://technigo-thoughts.herokuapp.com/';

  useEffect(() => {
    fetch(MESSAGES_URL)
      .then((res) => res.json())
      .then(json => { setThoughts(json) })
      .catch(error => console.log("Error:", error))
  }, [])

  return (
    <div className="appContainer">
      <Form />
      {thoughts.map(thought => (
        <HappyThoughts
          key={thought._id}
          thought={thought}
        />
      ))}
      <footer>Anne-Sophie Gendron - Technigo Bootcamp 2020</footer>
    </div>
  )
}

