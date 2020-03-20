import React, {useState, useEffect} from 'react'

import './button.css'

export const Button = (props) => {
  const { message, setMessage } = props

  const submitHandler = () => {
    fetch('https://technigo-thoughts.herokuapp.com/', 
    {method: 'POST',
    body: JSON.stringify({ message }),
    headers: { 'Content-Type': 'application/json'}})
    
  } 


  return (
    <button onClick={submitHandler} className="btn">❤️ Send Happy Thought ❤️</button>
  )
}