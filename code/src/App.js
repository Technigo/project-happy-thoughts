import React, { useEffect, useState } from 'react'

import MessageBoard from './components/MessageBoard'
import MessageForm from './components/MessageForm'



export const App = () => {
  
  const storage = window.localStorage.getItem('myLikes')
  const array = (count) => {
    if (count === null) {
      return []
    } else{
    return count.split(",")}}
  
  const initialCount = (array(storage))
  
  const [thoughts, setThoughts] = useState([])
  const [myLikes, setMyLikes] = useState(initialCount)
  
  
  useEffect(()=> {
    window.localStorage.setItem('myLikes', myLikes) 
  }, [myLikes])

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
