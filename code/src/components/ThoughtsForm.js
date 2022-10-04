import React from 'react';

const ThoughtsForm = ({ newMessage, onNewMessageChange, onFormSubmit }) => {
  return (

    <form className="form-style" onSubmit={onFormSubmit}>
      <h1>Welcome !</h1>
      <textarea placeholder="Happy Thoughts" value={newMessage} onChange={onNewMessageChange} />
      <div className="main">
        <button className="button" disabled={newMessage.length < 6 || newMessage.length > 140} type="submit">send</button>
      </div>
    </form>
  )
}

export default ThoughtsForm;