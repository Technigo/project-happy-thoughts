import React from 'react'

export const Like = ( {_id, hearts, onLike} ) => {

    const handleLike = (_id) => {
        //POST like on specific comment
        fetch(`https://mongo-thoughts-api.herokuapp.com/thoughts/${_id}/like`, {
          method: "POST",
          headers: { "Content-Type":"application/json" },
          body:"",
        }).then(() => onLike(_id))
    }

  return  <button onClick={() => {handleLike(_id)}} style={{ background: hearts > 0 ? '#feacac': 'f2f0f0'}} className="like-button">
            <span role="img" aria-label="Heart emoji"> ❤️ </span>
          </button>
}

