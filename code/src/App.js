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
    e.preventDefault()
    // console.log("submitted: ", newThought)
    
    fetch( API_URL, 
        { method: 'POST', headers: { 'Content-Type': 'application/json',}, body: JSON.stringify({ message: newThought }) }
      ).then((res) => res.json()).then((data) => setThoughts([data, ...thoughts]))
      if (newThought.length < 4 ) {
        alert('Too few characters')
      }
      else if ( newThought.length > 140 ) {
        alert('Too many characters')
      } 
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

    })
  }

const characterStyling = (chars) => {

  if (chars.length < 4  ||  chars.length > 140) {
  return ('charactersNOTOK') }
  else return ('charactersOK')
}

// const errorAlert = (input) => {


//   if (input.length < 4 ) {
//     alert('Too few characters')
//   }
//   else if ( input.length > 140 ) {
//     alert('Too many characters')
//   }
// }

  return (

    <div className="thoughts-wrapper">

    <form onSubmit={onFormSubmit}> 
      <label htmlFor="newThought" >What's making you happy right now?</label>
      <input className={characterStyling(characters)} 
      value={newThought} 
      onInput={(e) => setCharacters(e.target.value)}
      onChange={(e) => setNewThought(e.target.value) }
      id={newThought}
      />
     <p className="date" >Characters left: {140 - characters.length}</p>

      <button  className="submit-btn" type="submit"><span role="img" aria-label="heart">💜</span> Send Happy Thought <span role="img" aria-label="heart">💜</span></button>
    </form>

  {thoughts.map(thought => (

    

  <div className="post-card" key={thought._id} >

      <p className="message">{thought.message}</p>


      <div className="heart-count">
      
      {/* { thought.hearts === 0 ? setColor('likedColorClass') : setColor('notLikedClass') } */}
      
      {/* This didn't work either: */}
      {/* { thought.hearts === 0 ? {() => setColor('likedColorClass')} : {() => setColor('notLikedClass')} } */}

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
