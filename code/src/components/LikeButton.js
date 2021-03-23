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
      <>
        <div className="test2">
          <button onClick={onClick} className="heart-button">
            <span className="heart-icon" role="img" aria-label="like">❤️</span>
          </button>
          <p className="tought-content heart">x{props.heart}</p> 
        </div>
      </>
  )
}

export default LikeButton