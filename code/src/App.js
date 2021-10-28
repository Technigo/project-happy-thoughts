import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { API_URL } from './utils/urls'

export const App = () => {

  const [thoughts, setThoughts] = useState ([])
  const [newThought, setNewThought] = useState ('')
 

  useEffect(()=> {
    fetch (API_URL)
    .then ((res) => res.json ())
    .then ((data) => setThoughts(data))
  }, [])

  const onFormSubmit = (event) => {
    event.preventDefault ()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought }),
    }

    fetch(API_URL, options)
    .then((res) => res.json())
    .then((data) => setThoughts([data, ...thoughts]))
  }

  const onLikesIncrease = (thoughtid) => {
    
    const options = {
      method: 'POST'
    }
      fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtid}/like`, options)
      .then((res) => res.json())
      .then((data) => {

        const updatedThoughts = thoughts.map((item) => {
          if (item._id === data._id){
            item.hearts += 1;
            return item;
          } else {
            return item;
          }
        })
        setThoughts(updatedThoughts)
      })
    }

  return (
    <div className="body">

      <form onSubmit={onFormSubmit} className="form-container">
        <label htmlFor="newThought" className="label-form">What's making you Happy right now?</label>
        <input 
          className="thought-input"
          id="newThought"
          type="text" 
          value={newThought}
          onChange= {(e) => setNewThought(e.target.value)}
          ></input>
          <button type="submit" className="submit-button">
            <div className="send-wrapper">
              <img src="/assets/red-heart.png"className="heart"></img> 
              <span className="send-happy">Send Happy Thought</span>
              <img src="/assets/red-heart.png"className="heart"></img> 
            </div>
            
            </button>
      </form>



      {thoughts.map(thought => (

        <div key={thought._id} className="message-container">
          <p className="thought-message">{thought.message}</p>
          <div className="button-row">
            <div className="heart-button-wrapper">
              <button onClick = {() => onLikesIncrease(thought._id)}
                className="heart-button">
                  <img src="/assets/red-heart.png"className="heart"></img> 
                </button>
              <p> x {thought.hearts}</p>
            </div>
           
            <p className="date">{moment(thought.createdAt).fromNow()}</p>
          
          </div>
          
        </div>
      )
        
      )}
    </div>
  )
}
