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
      <button className="theHeart" onClick={handleClick}>
      <span role='img' aria-label='Heart'>
        {"❤️"}
      </span>
      </button>
      <span className="noLikes">x{hearts}</span>
      <p className="theDate">{moment(createdAt).fromNow()}</p>
    </article>
  )
}