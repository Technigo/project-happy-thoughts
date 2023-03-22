import React from 'react';

const CreateThought = ({ handleSubmitMessages, message, setMessage, name, setName, id }) => {
  return (
    <form onSubmit={handleSubmitMessages} key={id}>
      <div>
        <p>What is making you happy right now?</p>
      </div>
      <div>
        <textarea
          type="text"
          id="textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)} />
      </div><input
        type="text"
        placeholder="Your name (optional)"
        maxLength="20"
        value={name}
        onChange={(e) => setName(e.target.value)} />
      <div>
        <button
          type="button"
          className="button"
          disabled={message.length < 6 || message.length > 140}>
            Send happy thought!
        </button>
      </div>
    </form>
  )
}

export default CreateThought;