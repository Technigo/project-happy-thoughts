import React, { useEffect, useState } from 'react'

import MessageBoard from './components/MessageBoard'
import MessageForm from './components/MessageForm'
// import MyLikes from './components/MyLikes'

export const App = () => {
  const storage = window.localStorage.getItem('myLikes')
  const splittingStorageIntoArray = (storageString) => {
    if (storageString === null) {
      return []
    } else{
    return storageString.split(",")}}
  
  const initialCount = (splittingStorageIntoArray(storage))
  
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

      {/* <MyLikes numberOfMyLikes={myLikes.length} /> */}

      <MessageBoard
        myLikes={myLikes} 
        setMyLikes={setMyLikes}
        thoughts={thoughts}
        setThoughts={setThoughts}
      />
    </div>
  )
}
