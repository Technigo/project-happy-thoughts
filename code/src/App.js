import React, { useState, useEffect } from 'react';
import { Heart } from "./components/Heart";
import { Timestamp } from "./components/Timestamp";

import './app.css'


export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState("")

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [])

  return (
    <div className="app">
      <div className="cards">
        <form className="thought-input">
          <p>What is making you happy right now?</p>
          <label>
            <input
              type="text"
              autoFocus
              placeholder="Type your tought here..."
              onChange={event => setNewThought(event.target.value)}
              value={newThought}
            />
          </label>
        </form>
      </div>

      <div className="cards">
        {thoughts.map(thought => (
          <div className="inside-cards">
            <p key={thought.id}>{thought.message}</p>
            <ul>
              <Heart hearts={thought.hearts} />
              <Timestamp createdAt={thought.createdAt} />
            </ul>
          </div>
        ))
        }
      </div>
    </div >

  )
}



    // <div>
    //   <ul>
    //     {thoughts.map(thought => (
    //       <div className="message-box">
    //         <li key={thought.message}>
    //           <button onClick={() => setSelectedThoughts(thought)}>
    //             {thought.message}
    //           </button>
    //         </li>
    //       </div>
    //     ))}
    //   </ul>
    //   {selectedThoughts && <Detail name={selectedThoughts.message} hearts={selectedThoughts.hearts} />}
    // </div>


