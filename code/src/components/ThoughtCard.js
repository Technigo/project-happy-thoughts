import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'
import '../components/thoughtcard.css'


export const ThoughtCard = ( props ) => {
  const { message, hearts, CreatedAt, id } = props

  const url = `https://technigo-thoughts.herokuapp.com/${id}/like`

  const handleLike = () => {
    // Send the POST request with the input from your form (instead
    // of 'Hello world' like this example does):
    fetch(url, { 
      method: 'POST', 
      body: "",
      headers: { "Content-Type": "application/json" }
    })
    .then(() => props.onLiked(id))
  }

  return (
    <article className="thoughtCard">
      <p className="thoughtText">{message}</p>
      <section className="thoughtCardDetails">
        <div className="thoughtCardLike">
          <span className="thoughtCardLikeIcon" onClick={handleLike}>❤️</span>
          <p> x {hearts}</p>
        </div>

        <Moment className="thoughtText" fromNow>{CreatedAt}</Moment>
      </section>
    </article>
  )
}