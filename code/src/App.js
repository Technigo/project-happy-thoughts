import { useState, useEffect } from 'react'
import ThoughtForm from 'components/ThoughtForm'
import ThoughtList from 'components/ThoughtList'


export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')

  const handleOnNewThought = (event) => {
    setNewThought(event.target.value)
  }

  useEffect(()=> {
    fetchThoughts();
  }, [])

  const fetchThoughts = () => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
    .then(res => res.json())
    .then(data => setThoughts(data))
  }


//Button Send Happy Thoughts
  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = { 
      method: 'POST', 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought })
    }
  
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .finally(()=> setNewThought('')) //Extract it to another function to cleans up the input
  }


//Like button
  const handleLikes = ((id) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }

    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
  }

  );
  
  return (
    <section className='mainWrapper'>
      <ThoughtForm 
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        onSetThoughtChange={handleOnNewThought}/>

      {thoughts.map((thought)=> (
      <ThoughtList
        key={thought._id}
        thought={thought}
        handleLikes={handleLikes}
        />
      ))};
    </section>
  );
};

