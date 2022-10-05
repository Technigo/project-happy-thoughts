import React, { useState, useEffect } from 'react';
import ThoughtsList from './ThoughtsList';
import NewThoughts from './NewThoughts'

const ThoughtWrapper = () => {
  const [thoughts, setThoughts] = useState([])
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('')
  const [colorBtn, setColorBtn] = useState('#f2f2f2')
   
  const fetchThought = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((transformedData) => setThoughts(transformedData))
      .catch((error) => console.error(error))
      .then(console.log('everything works'))
      .then(console.log(thoughts))
      .finally(() => setLoading(false));
  }
  
  useEffect(() => {
    fetchThought();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const options = 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify
          ({ message: newThought })
    }

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
        .then(res => res.json())
        .then(() => fetchThought())
        .finally(() => setNewThought(''));
    
  }
  
  const newThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const handleLikeCounter = () => {
          
      const options = 
      {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
      }
  
      fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts/THOUGH_ID/like', options)
          .then(res => res.json())
          .catch((error) => console.error(error))
          .finally(() => setColorBtn("#ffb3b3"));

  };

  return (
    <>
    <NewThoughts 
    newThought={newThought}  
    handleSubmit={handleSubmit} 
    newThoughtChange={newThoughtChange} />
    <ThoughtsList 
    thoughts={thoughts}
    loading={loading}
    handleLikeCounter={handleLikeCounter}
    colorBtn={colorBtn} />
    </>
  );
};

export default ThoughtWrapper;
