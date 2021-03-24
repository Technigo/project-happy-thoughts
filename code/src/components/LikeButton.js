import React from 'react'

const LikeButton = (props) => {
  const LIKE_URL = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${props.id}/like`

  const onClick = () => {

    const options = {
      method: 'POST', 
      headers: {
        'Content-type': 'application/json'
      }, 
      body : ''
    }
    fetch(LIKE_URL, options)
    .then (() => {
      props.onMessageLiked(props.id)
    }) 

  }

    return (
      <div className="button-container">
        <div className="like-btn">
          <button className={props.heart > 0 ? "heart-button heart-button-clicked" : "heart-button" } onClick={onClick }>
            <span className="heart-icon" role="img" aria-label="like">❤️</span>
          </button>
          <p>x{props.heart}</p>
        </div> 
        <p className="time">{props.time}</p>
      </div>
  )
}

export default LikeButton