import React from 'react';

const SendMessage = ({ newMessage, handleNewMessageChange, onFormSubmit }) => {
  return (
    <section className="outer-send-msg-wrapper">

      <form onSubmit={onFormSubmit} className="form-container">
        <h2>Add your happy thought: </h2>
        <textarea
          value={newMessage}
          /* id="newMessage" */
          type="text"
          placeholder="My happy thought..."
          onChange={handleNewMessageChange} />

        <button
          type="submit"
          className="send-btn"
          onClick="">
            ❤️ SEND HAPPY THOUGHT ❤️
        </button>

      </form>

    </section>
  )
}
export default SendMessage