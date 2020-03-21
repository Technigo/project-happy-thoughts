import React, { useState, useEffect } from 'react'
import '../components/toughtcard.css'


export const ToughtCard = (props) => {
  return (
    <article className="toughtCard">
      <p>{props.message}</p>
      <section className="toughtCardDetails">
        <p>{props.hearts}</p>
        <p>{props.CreatedAt}</p>
      </section>
    </article>
  )
}