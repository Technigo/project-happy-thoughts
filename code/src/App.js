import React, { useState, useEffect } from 'react'

export const App = () => {

  const [thoughts, setThoughts] = useState([])
  useEffect(() => {

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
    .then((res) => res.json())
    .then(data => setThoughts(data))



    console.log("mounted or uppd.");
  }, [] )

  console.log(`my ${thoughts}`);

  return (
    <div>
  {thoughts.map(thought => (
    <div key={thought._id}>
      <p>{thought.message}</p>
      <button> &hearts; {thought.hearts} </button>
      <p>Created at: {thought.createdAt} </p>
    </div>
  ))  
  }
    </div>
  )
}
