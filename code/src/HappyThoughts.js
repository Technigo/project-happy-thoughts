import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { LikeButton } from './LikeButton'

export const HappyThoughts = () => {

  //The initial state "useState([])"" is an array that we can access with the first element "thoughts" 
  //and be set (changed) with the second element "setThoughts" that is a function. We update the thoughts with setThoughts. 
  const [thoughts, setThoughts] = useState([])
  const THOUGHTS_URL = 'https://technigo-thoughts.herokuapp.com/'

  /*The onLiked function will be triggered by Handleclick in LikeButton.js and
  map through the thoughts and check every thought if it has the same id as the clicked thought.
  It will map through the thoughts and comapare every id, and when it comes to the thought 
  with the same id, it adds +1 to the value of hearts. */

  const onLiked = thoughtId => {

    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        //If so it will add the value 1 to the hearts object of the specific thought.
        thought.hearts += 1
      }
      //The function will return the object thought (with the new value of the hearts) and 
      return thought
    })
    //update the state of the thoughts array with setThoughts(updatedThoughts)
    setThoughts(updatedThoughts)
  }

  //useEffect will run and fetch the json (with all the thougths) and ...
  useEffect(() => {
    fetch(THOUGHTS_URL)
      .then((res) => res.json())
      // ... replace the json with the new updated state (setThoughts). 
      .then(json => setThoughts(json)
      )
  }, []) // The empty array is here I forgot why! Maybe because it shouldn't rerender all the time? 

  //The return will render the page with the info. The LikeButton brought som props.
  return (
    <article>
      {thoughts.map(thought => (
        <section className="thoughtsCard" key={thought._id}>
          <div className="thought">{thought.message}</div>
          <span className="heartSection">
            <LikeButton key={thought._id} thought={thought} onLiked={onLiked} /> {moment(thought.createdAt).fromNow()} </span></section>
      ))
      }
    </article >
  )
}


