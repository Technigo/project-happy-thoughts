import React, { useEffect, useState } from 'react'

const url = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

export const HappyForm= props => {
  const [message, setMessage] = useState('')
  
  const handleFormSubmit = event => {
    event.preventDefault()
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({message}), 
    })
    .then(() => {
      setMessage('')
      props.onFormSubmitt(message)
    })
    return (
      <form>
        <h3>Post a happy thought</h3>
        <textarea
        rows='3'
        value='message'
        onChange={event => setMessage(event.target.value)}>
        </textarea>
      </form>
    )
  }}