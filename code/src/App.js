import React, { useState } from 'react'

import MessageBoard from './components/MessageBoard'
import MessageForm from './components/MessageForm'



export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [myLikes, setMyLikes] = useState([])

  return (
    <div className="content-container">
      
      <MessageForm 
        thoughts={thoughts}
        setThoughts={setThoughts} 
      />
      <section className="mylikes-container">
        <div className="mylikes-wrapper">
          <p className="mylikes">My {'\u2665'} x {myLikes.length}</p>
        </div>
      </section>
      <MessageBoard
        setMyLikes={setMyLikes}
        myLikes={myLikes} 
        thoughts={thoughts}
        setThoughts={setThoughts}
      />
    </div>
  )
}
