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

    < button
      className='heart-button'
      // { props.hearts <= 0 : className='unliked' ?className='liked'}
      onClick={handleHeart} >
      <span role='img' aria-label='heart'>
        {'❤️'}
      </span>
    </button >
  )
}

// {newThought.length <= 5 || newThought.length >= 140 ? true : false}