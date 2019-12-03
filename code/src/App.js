import React, { useState, useEffect } from 'react'


export const App = () => {
  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => {
        setThoughts(json)
      });
  }, []);

  const [thoughts, setThoughts] = useState([]);
  const handleFormSubmit = (event) => {
    event.preventDefault()
  }


  return (
    <div>

      <div className="thoughtBox">
        <form>
          <p> What's making you happy right now?</p>
          <input type="text" />
          <button type="submit">Send your happy thought!</button>
        </form>
      </div>


      {thoughts.map(thought => (
        <p key={thought._id}>{thought.message} Likes: {thought.hearts} Posted: {thought.createdAt}</p>
      )
      )}
    </div>
  )
};
