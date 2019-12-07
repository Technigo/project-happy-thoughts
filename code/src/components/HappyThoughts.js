import React from 'react'
import moment from 'moment'
import './happyThoughts.css'

export const HappyThoughts = props => {
    console.log("props", props)
    const { message, hearts, createdAt, _id } = props.thought

    const handleClick = () => {
        fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, {
          method: "POST",
          body: "",
          headers: { "Content-Type": "application/json" }
        }).then(() => props.onLiked(_id))
      }

    return (
        <article>
            <h3>{message}</h3>
            <div className="heart-time">
                <p>
                <button onClick={handleClick}>
            <span role='img' arial-label='heart'>
               {"💜"} 
            </span>
            </button> 
            x {hearts}
            </p>
            <p>{moment(createdAt).fromNow()}</p>
            </div>
        </article>
    )
}