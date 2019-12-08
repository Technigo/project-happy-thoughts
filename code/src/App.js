import React, { useEffect, useState } from 'react'
import { HappyThoughts } from './HappyThoughts'
import { HappyForm } from './HappyForm'
import { Like } from './Like'

import "./App.css";
import "./HappyThoughts.css";


export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState([])

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com")
      .then(res => res.json()
        .then(json => setThoughts(json))
        // Jag vill spara datan från json i en state .. därför skapar vi Thoughts-state och skriver här metoden setThoughts 
      )
  }, [postedMessage])

  const handleFormSubmit = message => {
    fetch("https://technigo-thoughts.herokuapp.com", {
      method: 'POST',
      body: JSON.stringify({ message: message }),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => setPostedMessage(message))
      .catch(err => console.log('error:', err))
  }

  return (
    <div className="mainContainer">
      <HappyForm onFormSubmit={handleFormSubmit} />
      <div>
        {thoughts.map(thought => (
          <div>
            <HappyThoughts key={thought._id} thought={thought} />
            {/* <Like /> */}
          </div>
        ))}
      </div>

    </div>
  )
}

{/* // <HappyThoughts key={thought._id} /> denna nyckel är den unika komponenten som särskiljer varje objekt i arrayn */ }
