import React from 'react'
import './happyThought.css'
import moment from 'moment'

const url = `https://happy-thoughts-new-api.herokuapp.com/`

export const HappyThought = (props) => {
  console.log('props', props)
  const { message, hearts, createdAt, _id} = props.thought
  const handleClick = () => {
    console.log("clicking!", _id)
    fetch(`https://happy-thoughts-new-api.herokuapp.com/${_id}/like`, {
      method: "POST",
      body: "",
      headers: {"Content-Type": "application/json"}
    }).then(() => props.onLiked(_id))
  }

  return (
    <article className='happy-thought'>
      <h3>{message}</h3>
      <p>
      <button onClick={handleClick}>
      <span role='img' aria-label='Heart'>
        {"❤️"}
      </span>
      </button>
        x {hearts}
      </p>
      <p>{moment(createdAt).fromNow()}</p>
    </article>
  )
}