import React, { useState } from 'react'
import './formstyle.css'

// const APIdata = 'https://technigo-thoughts.herokuapp.com/'



export const HappyForm = props => {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    props.onFormSubmit(message)
    setMessage('')

  //   fetch(APIdata, {
  //     method: 'POST',
  //     body: JSON.stringify({ message }),
  //     headers: { "Content-Type": "application.json" }
  //   })
  //     .then(() => {
  //       setMessage('')
  //       props.onFormSubmit(message)
  //     })
  //     .catch(err => console.log("error:", err))
  }

  return (
    <form className="happy">
      <h3>SHARING IS CARING:</h3>

      <textarea value={message}
        onChange={event => setMessage(event.target.value)}>
      </textarea>

      <div className="sending">
        <button onSubmit={handleSubmit}
          type="submit"
          disabled={message.length < 6 || message.length > 140 ? true : false}
          >
          POST
        </button>
        <p>{message.length}/140</p>
      </div>
    </form>
  )
}
