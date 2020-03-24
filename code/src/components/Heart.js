import React from 'react'
import './heart.css'

export const Heart = (props) => {
  const heartUrl = `https://technigo-thoughts.herokuapp.com/${props.id}/like`

  const handleHeart = () => {

    fetch(heartUrl,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: ''
      }).then(() => {
        props.onMessageLiked(props.id)
      })
  }

  return (
    <button
      className='heart-button'
      onClick={handleHeart}
    >
      ❤️
    </button>
  )
}