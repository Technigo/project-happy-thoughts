import React from 'react'
import moment from 'moment'
import '../happy.css'

export const HappyThought = (props) => {
  console.log('props', props)
  const { message, hearts, createdAt, _id } = props.thought
  
  const handleClick = () => {

    console.log("clicking", _id)
    fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, {
    method:"POST", 
    body: "", 
    headers: {"Content-Type": "application/json"}
  }).then(() => props.onLike(_id))
  }
  
  return (
    <article>
      <h1>{message}</h1>
      <button onClick={handleClick}>
      <span role='img' aria-label='Heart'>
        {"❤️"}
      </span>
      </button>
      x{hearts}
      <p>{moment(createdAt).fromNow()}</p>
    </article>
  )
}