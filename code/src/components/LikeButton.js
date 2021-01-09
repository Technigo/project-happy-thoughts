import React from "react"

export const LikeButton = ({hearts , id, onThoughtLiked}) => {

  const handleClick = () => {
    fetch(`https://happy-thoughts-dummy-api.herokuapp.com/thoughts/${id}/like`,
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