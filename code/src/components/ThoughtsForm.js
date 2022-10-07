import React from 'react';

const ThoughtsForm = ({ newMessage, onNewMessageChange, onFormSubmit }) => {
  return (

    <form className="form-style" onSubmit={onFormSubmit}>
      <h1>What is making you happy right now?</h1>
      <textarea className="textBox" placeholder="Happy Thoughts here!" defaultValue={newMessage} onChange={onNewMessageChange} />
      <p className="lenght-newMessage">{newMessage.length} / 140</p>
      <div className="main">
        <button className="button" disabled={newMessage.length < 4 || newMessage.length > 140} type="submit">❤️Send Happy Thoughts❤️</button>
      </div>
    </form>
  )
}
export default ThoughtsForm;