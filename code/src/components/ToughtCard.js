import React, { useState, useEffect } from 'react'
import '../components/toughtcard.css'


export const ToughtCard = (props) => {

  const url = `https://technigo-thoughts.herokuapp.com/${props.id}/like`
  
  return (
    <article className="toughtCard">
      <p>{props.message}</p>
      <section className="toughtCardDetails">
        <p>{props.hearts}</p>
        <p>{props.CreatedAt}</p>
        {/* <p>Id: {props.id}</p> */}
      </section>
    </article>
  )
}