import React from 'react'

export const SendMessage = (props) => {

  const { message, setMessage } = props

  return (
    <form>
      <h2>What's making you happy right now?</h2>
      <textarea
        rows="3"
        value={message}
        onChange={event => setMessage(event.target.value)}>
      </textarea>
      <section>
        <button
          type="submit">
          Send happy thought
          </button>
        <p>/ 140</p>
      </section>
    </form>
  )
}
