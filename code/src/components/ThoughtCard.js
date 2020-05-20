import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'
import '../components/thoughtcard.css'


export const ThoughtCard = ( props ) => {
  const { message, hearts, CreatedAt, id } = props

  const url = `https://plunta-happy-thought-api.herokuapp.com/${id}/like`

  const handleLike = () => {
    fetch(url, { 
      method: 'POST', 
      body: "",
      headers: { "Content-Type": "application/json" }
    })
    .then(() => props.onLiked(id))
    .catch((error) => {
      console.error('Error:', error);
    })
  }

  return (
    <article className="thoughtCard">
      <p className="thoughtText">{message}</p>
      <section className="thoughtCardDetails">
        <div className="thoughtCardLike">
          <span className={ hearts > 0 ? 'thoughtCardLikeIcon' : 'thoughtCardNotLikeIcon' } onClick={handleLike}>❤️</span>
          <p> x {hearts}</p>
        </div>

        <Moment className="thoughtText" fromNow>{CreatedAt}</Moment>
      </section>
    </article>
  )
}