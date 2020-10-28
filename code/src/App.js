import React, { useEffect, useState } from 'react';

import Header from 'Header'
import {ThoughtList} from './ThoughtList'
import {Form} from './Form'

export const App = () => {
    const THOUGHT_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
    const [thought, setThought] = useState([])

    useEffect(() => {
      fetchThought();
    }, []);

    const fetchThought = () => {
      fetch(THOUGHT_URL)
          .then(res => res.json())
          .then(data => setThought(data))
          .catch(error => console.error(error));
          
    }

    const postThought = newThought => {
      fetch(THOUGHT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newThought })
      })
        .then(() => {
          fetchThought(); 
        })
        .catch(error => console.error(error));
    }


  

  return (
    <div>
      <Header />
      <Form onThoughtChange={postThought}/>
      <ThoughtList thoughtList={thought} fetchThought={fetchThought}/>
    </div>
  )
}
