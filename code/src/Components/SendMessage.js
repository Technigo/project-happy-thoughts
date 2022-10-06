import React from 'react';

const SendMessage = ({ newMessage, handleNewMessageChange, onFormSubmit }) => {
  return (
    <section className="outer-send-message-container">
      <div className="inner-send-message-container">
        <form onSubmit={onFormSubmit}>
          <h2>What is making you happy right now?</h2>
          <textarea
            value={newMessage}
            type="text"
            placeholder="My happy thought is..."
            onChange={handleNewMessageChange}
            className="text-area"
            maxLength="140"
            minLength="10" />
          <button
            type="submit"
            className="send-btn"
            onClick="">
            ❤️ Send happy thought ❤️
          </button>
        </form>
        <p className={newMessage.length === 140 ? 'red-font' : 'normal-font'}>Remaining characters:{140 - newMessage.length}</p>
      </div>
    </section>
  )
}

export default SendMessage

// eslint-disable-next-line max-len
// {/* {newMessage.length < 10 && (alert('Your thought needs to be at least 10 characters long ☁️'))} Denna ska ha en useEffect?? och ligga mellan rad 24 och 25?*/}
