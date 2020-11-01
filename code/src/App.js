import React, { useEffect, useState } from 'react';

import Header from 'Header'
import {ThoughtList} from './ThoughtList'
import {Form} from './Form'

export const App = () => {
    const THOUGHTS_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
    const [thoughts, setThoughts] = useState([])

    useEffect(() => {
      fetchThoughts();
    }, []);

    // Fetch thoughts from api,
    const fetchThoughts = () => {
      fetch(THOUGHTS_URL)
          .then(res => res.json())
          .then(data => setThoughts(data))
          .catch(error => console.error(error));
    }

    // Post a thought to the api.
    const postThought = newThought => {
      fetch(THOUGHTS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newThought })
      })
        .then(() => fetchThoughts())
        .catch(error => console.error(error));
    }

    const onThoughtLiked = id => {
      const updatedThoughts = thoughts.map((thoughts) => {
        if (thoughts._id === id) {
          thoughts.hearts += 1;
        }
        return thoughts;
      });
      setThoughts(updatedThoughts);
    };
  
  return (
    <>
      <Header />
      <Form onThoughtChange={postThought}/>
      <ThoughtList 
        thoughtList={thoughts} 
        onThoughtLiked={onThoughtLiked}/>
    </>
  )
}
