import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { API_URL } from './utils/urls'




export const App = () => {


  const [newThought, setNewThought] = useState([])
  const [thoughts, setThoughts] = useState([])
  const [color, setColor] = useState('')


  useEffect(() => {

    fetch(API_URL)
    .then((res) => res.json())
    .then(data => setThoughts(data))

  }, [] )


  const onFormSubmit = (e) => {
    e.preventDefault()
    // console.log("submitted: ", newThought)
    fetch( API_URL, 
        { method: 'POST', headers: { 'Content-Type': 'application/json',}, body: JSON.stringify({ message: newThought }) }
      ).then((res) => res.json()).then((data) => setThoughts([data, ...thoughts]))
  }



  const addLike = (thoughtId) => {

    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`, 
        { method: 'POST'}

    ).then((res) => res.json()).then((data) => {

      const updateLikes = thoughts.map((item) => {
          if(item._id === data._id) {
          item.hearts += 1
          return item }
          
          else { return item }
      })

      setThoughts(updateLikes)

    }
    )

  }


  return (

    <div className="thoughts-wrapper">

    <form onSubmit={onFormSubmit}> 
      <label htmlFor="newThought" >What's making you happy right now?</label>
      <input value={newThought} 
      onChange={(e) => setNewThought(e.target.value)}
      id={newThought}
      />

      <button className="submit-btn" type="submit"><span>💜</span> Send Happy Thought <span>💜</span></button>
    </form>

  {thoughts.map(thought => (

    

  <div className="post-card" key={thought._id} >

      <p className="message">{thought.message}</p>


      <div className="heart-count">
      
      { thought.hearts === 0 ? setColor('likedColorClass') : setColor('notLikedClass') }
      
      {/* This didn't work either: */}
      {/* { thought.hearts === 0 ? {() => setColor('likedColorClass')} : {() => setColor('notLikedClass')} } */}

        <div>
          <button className={color}
          onClick={() => addLike(thought._id)}>
          <span role="img" aria-label="heart">💜</span>
          </button>
        </div> 

        <div>
          x {thought.hearts}
        </div>

      </div>
{/*           
        {if ({thought.hearts} === 0) => {

        <div className="unliked">
          <button onClick={() => addLike(thought._id)}>
          <span role="img" aria-label="heart">💜</span>
          </button>
        </div> 
        }

        else( 
          <div className="liked">
            <button onClick={() => addLike(thought._id)}>
            <span role="img" aria-label="heart">💜</span>
            </button>
          </div> 
        )} */}

        {/* {thought.hearts === 0 ? console.log('NO HEARTS') : console.log('HAS HEARTS')} */}

        



      <p className="date">Created: {moment(thought.createdAt).fromNow()} </p>

    </div>
  ))  
  }
  </div>
  )
}
