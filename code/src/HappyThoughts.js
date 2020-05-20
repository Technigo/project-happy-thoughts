import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { LikeButton } from './LikeButton'

export const HappyThoughts = () => {

  /* useState([]) returns an array with the state and a function 
    - 1st element - state holding the value (thoughts) 
    - 2nd element - function to set the value (setThoughts) */
  const [thoughts, setThoughts] = useState([])

  //const THOUGHTS_URL = 'https://technigo-thoughts.herokuapp.com/'
  //const THOUGHTS_URL = 'http://localhost:8080'
  const THOUGHTS_URL = 'https://happylove-api.herokuapp.com'

  /* The onLiked function will be triggered by Handleclick in LikeButton.js. It will 
    - map through the thoughts and check every thought if it has the same id as the clicked thought.
    - When it maps through the thoughts it comapares every id
    - When it comes to the thought with the same id as the clicked one, it adds +1 to the value of hearts. */

  const onLiked = thoughtId => {

    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        //If so it will add the value 1 to the hearts object of the specific thought.
        thought.hearts += 1
      }
      //The function will return the object thought (with the new value of the hearts)
      return thought
    })
    //Then updates the state of the thoughts array with setThoughts(updatedThoughts)
    setThoughts(updatedThoughts)
  }


  //useEffect will run and fetch the json (with all the thougths) 
  useEffect(() => {
    fetch(THOUGHTS_URL)
      .then((res) => res.json())
      // the json will be replaced with the new updated state (setThoughts). 
      .then(json => setThoughts(json)
      )
  }, []) // The empty array is here I forgot why! Maybe because it shouldn't rerender all the time? 

  //The return will render the page with the info. The LikeButton passed some props.
  return (
    <article>
      {thoughts.map(thought => (
        <section className="thoughtsCard" key={thought._id}>
          <div className="thought">{thought.message}</div>
          <div className="thoughtBy">/{thought.name}</div>
          <span className="heartSection">
            <LikeButton key={thought._id} thought={thought} onLiked={onLiked} /> {moment(thought.createdAt).fromNow()} </span></section>
      ))
      }
    </article >
  )
}


