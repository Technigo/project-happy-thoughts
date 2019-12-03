import React, { useState, useEffect } from 'react';
// import { Heart } from "./Heart";
import './app.css'


export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [selectedThoughts, setSelectedThoughts] = useState([])

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [])

  return (
    <div className="app">
      {thoughts.map(thought => (
        <div className="inside-cards">
          <p key={thought.id}>{thought.message}</p>
          <ul>
            <li><button>❤️</button></li>
            <li>x {thought.hearts}</li>
            <li>{thought.createdAt}</li>
          </ul>
        </div>
      ))
      }
    </div>

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


