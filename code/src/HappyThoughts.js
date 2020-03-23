import React from 'react'
import { Emoji } from "./Emoji"
import './HappyThoughts.css'


export const HappyThoughts = (props) => {
  const { message } = props
  const { hearts } = props
  const { date } = props

  return (
    <article className="thoughts-container">
      <h2>{message}</h2>
      <Emoji symbol="❤️" />
      <p>x {hearts}</p>
      <p>{date}</p>

    </article>
  )
}