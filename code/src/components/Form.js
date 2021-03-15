import React, { useState } from 'react'

const Form = () => {
  const [message, setMessage] = useState('')

  const onMessageChange = (event) => {
      console.log(event)
      setMessage(event.target.value)
  }

  return (
    <form>
    <div className="tought-message">
      <label htmlFor="message">What's making you happy right now?</label>
      <input 
        id="message" 
        type="text" 
        value={message}
        onChange={onMessageChange}
      />
    </div>
    {/* <div>
      <label htmlFor="name">Name(optional)</label>
      <input id="name" type="text"/>
    </div> */}
  </form>
  )
}

export default Form 