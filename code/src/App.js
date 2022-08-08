import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { API_URL } from './utils/urls'


export const App = () => {


  const [newThought, setNewThought] = useState([])
  const [thoughts, setThoughts] = useState([])
  const [characters, setCharacters] = useState([])


  useEffect(() => {

    fetch(API_URL)
    .then((res) => res.json())
    .then(data => setThoughts(data))

  }, [] )



  const onFormSubmit = (e) => {
    // e.preventDefault()
    
    fetch( API_URL, 
        { method: 'POST', headers: { 'Content-Type': 'application/json',}, body: JSON.stringify({ message: newThought }) }
      ).then((res) => res.json()).then((data) => setThoughts([data, ...thoughts])).then(setNewThought(newThought))

      if (newThought.length < 5 ) {
        alert('Too few characters')
      }
      else if ( newThought.length > 140 ) {
        alert('Too many characters')
      } 
      setThoughts(thoughts)
    }

    useEffect(() => { setThoughts(thoughts) }, [onFormSubmit])


  const addLike = (thoughtId) => {

    fetch(`${API_URL}/${thoughtId}/like`, 
        { method: 'POST'}

    ).then((res) => res.json()).then((data) => {

      const updateLikes = thoughts.map((item) => {
          if(item._id === data._id) {
          item.hearts += 1
          return item }
          
          else { return item }
      })
      setThoughts(updateLikes)
    })
  }


  const characterStyling = (chars) => {

    if (chars.length < 5  ||  chars.length > 140) {
    return ('charactersNOTOK') }
    else return ('charactersOK')
  }


  return (

    <div className="thoughts-wrapper">

    <form onSubmit={onFormSubmit}> 
      <label htmlFor="newThought">What's making you happy right now?</label>
      <input 
      className={characterStyling(characters)} 
      value={newThought} 
      onInput={(e) => setCharacters(e.target.value)}
      onChange={(e) => setNewThought(e.target.value)}
      id={newThought}
      />
     <p className="date"> Characters left: {140 - characters.length}</p>

      <button  className="submit-btn" type="submit"><span role="img" aria-label="heart">💜</span> Send Happy Thought <span role="img" aria-label="heart">💜</span></button>
    </form>

  {thoughts.map(thought => (

    

  <div className="post-card" key={thought._id} >

      <p className="message">{thought.message}</p>


      <div className="heart-count">
      
        <div>
          <button className={ thought.hearts === 0 ? 'notLikedClass' : 'likedColorClass' }
          onClick={() => addLike(thought._id)}>
          <span role="img" aria-label="heart">💜</span>
          </button>
        </div> 

        <div>
          x {thought.hearts}
        </div>

      </div>

      <p className="date">Created: {moment(thought.createdAt).fromNow()} </p>

    </div>
  ))  
  }
  </div>
  )
}
