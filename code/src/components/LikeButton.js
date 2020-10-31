import React from "react"


// POST https://happy-thoughts-technigo.herokuapp.com/thoughts/{THOUGHT_ID}/like
// Replace THOUGHT_ID with the _id parameter of the thought the user clicked on
// Number of 'hearts' will increase when clicked

export const LikeButton = ({hearts , id, onThoughtLiked}) => {
  //const hearts = props.hearts
  //const _id = props._id

  const handleClick = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: ""
      }).then(() => {
        onThoughtLiked(id);
      })
    }

  return (
    <div className="likes">
      <button
        className="like-button"
        onClick={handleClick}
        style={{ background: hearts > 0 ? "#feacac" : "f2f0f0"}}
      >
        <span role="img" aria-label="Red heart emoji">&#10084;&#65039;</span>
      </button>
      x {hearts}
    </div>
  )
}