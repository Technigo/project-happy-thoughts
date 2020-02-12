import React from "react";
import { Heart } from "./Heart"
import { Timestamp } from "./Timestamp"


export const HappyThoughts = props => {
  console.log("props", props)
  const { message, name, hearts, createdAt } = props.thought
  return (
    <article className="inside-cards">
      <p>{message}</p>
      <p className="name">{name}</p>
      <ul>
        <Heart hearts={hearts}
          id={props.thought._id}
          onThoughtLiked={props.onThoughtLiked} />
        <Timestamp createdAt={createdAt} />
      </ul>
    </article >
  )
}
