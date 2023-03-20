import React from 'react'

export const Form = (props) => {
  return (
    <div>
      <form className="happy-thought-form" onSubmit={props.OnSubmitForm}>
        {/* <label htmlFor="newThougt">Whats making you happy right now?</label> */}
        <textarea
          className="new-message"
          cols="20"
          rows="5"
          id="newThougt"
          type="text"
          value={props.thoughtsNew}
          onChange={props.OnThoughtsNew} />
        <button className="send-thought-button" type="submit" onClick={props.OnSubmitForm}>
          <span role="img" aria-label="Heart">💗 Send Happy Thought 💗</span>
        </button>
      </form>
    </div>
  )
}