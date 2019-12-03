import React, { useState, useEffect } from 'react';
import { Heart } from "./components/Heart";
// import { Timestamp } from "./components/Timestamp";
import Timestamp from "react-timeago"
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
            <button className="send-button">❤️ Send Happy Thought ❤️</button>
          </label>
        </form>
      </div>

      <div className="cards">
        {thoughts.map(thought => (
          <div className="inside-cards">
            <p key={thought.id}>{thought.message}</p>
            <ul>
              <Heart hearts={thought.hearts} />
              <span className="time">
                <Timestamp date={thought.createdAt} />
              </span>
            </ul>
          </div>
        ))
        }
      </div>

      <footer>Technigo Bootcamp 2019 © Linda Isell</footer>

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


