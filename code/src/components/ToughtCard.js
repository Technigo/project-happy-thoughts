import React, { useState, useEffect } from 'react'
import '../components/toughtcard.css'


export const ToughtCard = (props) => {
  const { message, hearts, CreatedAt, id } = props

  const url = `https://technigo-thoughts.herokuapp.com/${id}/like`

  const handleLike = (event) => {
    // Send the POST request with the input from your form (instead
    // of 'Hello world' like this example does):
    fetch(url, { 
      method: 'POST', 
    })
  }

  console.log(url)
  return (
    <article className="toughtCard">
      <p className="toughtText">{message}</p>
      <section className="toughtCardDetails">
        <div className="toughtCardLike">
          <span className="toughtCardLikeIcon" onClick={() => handleLike()}>❤️</span>
          <p> x {hearts}</p>
        </div>

        <p className="toughtText">{CreatedAt}</p>
        {/* <p>Id: {props.id}</p> */}
      </section>
    </article>
  )
}