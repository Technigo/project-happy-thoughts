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
      <p>{message}</p>
      <section className="toughtCardDetails">
        <p onClick={() => handleLike()}>{hearts}</p>
        <p>{CreatedAt}</p>
        {/* <p>Id: {props.id}</p> */}
      </section>
    </article>
  )
}