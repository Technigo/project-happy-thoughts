import React from 'react'

import './button.css'

export const Button = (props) => {
  const { message } = props


  const submitHandler = (event) => {
    event.preventDefault()

    fetch('https://ragna-happy-thoughts.herokuapp.com/', 
    {method: 'POST',
    body: JSON.stringify({ message }),
    headers: { 'Content-Type': 'application/json'}})
    .then(() => {
      window.location.reload()
    })
    
    
  } 


  return (
    <button 
      aria-label='Send Happy Thought' 
      onClick={submitHandler} 
      className='btn'
      disabled={ message.length < 5 ? true : false }>
        <span aria-label='heart-emoji' role='img' alt='heart-emoji'>❤️</span> Send Happy Thought <span aria-label='heart-emoji' role='img' alt='heart-emoji'>❤️</span>
    </button>
  )
}