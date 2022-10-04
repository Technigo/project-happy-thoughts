import React from 'react';

const ThoughtsForm = ({ newMessage, onNewMessageChange, onFormSubmit }) => {
  return (

    <form className="form-style" onSubmit={onFormSubmit}>
      <h1>What is making you happy right now?</h1>
      <textarea className="textBox" placeholder="Happy Thoughts here!" defaultValue={newMessage} onChange={onNewMessageChange} />
      <div className="main">
        <button className="button" type="submit"><span>❤️</span>Send Happy Thoughts<span>❤️</span></button>
      </div>
    </form>
  )
}
export default ThoughtsForm;

// disabled={newMessage.length < 6 || newMessage.length > 140}