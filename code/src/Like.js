import React from 'react'

export const Like = ( {_id} ) => {

    const handleLike = (_id) => {
        //POST like on specific comment
        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, {
          method: "POST",
          headers: { "Content-Type":"application/json" },
          body:"",
        })
    }

  return  <button onClick={() => {handleLike(_id)}} className="like-button">
            <span role="img" aria-label="Heart emoji"> ❤️ </span>
          </button>
}

