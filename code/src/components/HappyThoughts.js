import React from 'react';
import { Heart } from "./Heart"
import { Timestamp } from "./Timestamp"
import './happythoughts.css'


export const HappyThoughts = props => {
  console.log("props", props)
  const { message, hearts, createdAt } = props.thought
  return (
    <article className="inside-cards">
      <p>{message}</p>
      <ul>
        <Heart hearts={hearts} />
        <Timestamp createdAt={createdAt} />
      </ul>
    </article >
  )
}

// varför måste jag ha hearts/timestamp={hearts} igen??