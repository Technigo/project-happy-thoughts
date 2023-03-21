import React from 'react';

export const PostMessage = ({ newMessage, onFormSubmit, handleNewMessage }) => {
  return (

    <form onSubmit={onFormSubmit}>
      <h1>hej!</h1>
      <textarea value={newMessage} onChange={handleNewMessage} />
      <button type="submit">Send happy thought!</button>
    </form>
  )
}