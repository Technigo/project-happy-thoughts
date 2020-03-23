import React from 'react'

import './button.css'

export const Button = (props) => {
  const { message } = props


  const submitHandler = (event) => {
    event.preventDefault()

    fetch('https://technigo-thoughts.herokuapp.com/', 
    {method: 'POST',
    body: JSON.stringify({ message }),
    headers: { 'Content-Type': 'application/json'}})
    .then(() => {
      window.location.reload()
    })
    
    
  } 


  return (
    <button onClick={submitHandler} className="btn">❤️ Send Happy Thought ❤️</button>
  )
}