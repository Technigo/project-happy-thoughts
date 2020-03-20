import React from 'react'

import './button.css'

export const Button = (props) => {
  const { message } = props


  const submitHandler = (event) => {
    fetch('https://technigo-thoughts.herokuapp.com/', 
    {method: 'POST',
    body: JSON.stringify({ message }),
    headers: { 'Content-Type': 'application/json'}})
    .then(event.preventDefault())
    
    
  } 


  return (
    <button onClick={submitHandler} className="btn">❤️ Send Happy Thought ❤️</button>
  )
}