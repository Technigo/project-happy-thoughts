
import React from 'react';

const PostThought = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <div className="PostThought">
      <form onSubmit={onFormSubmit}>
        <h1>What is making you happy right now?</h1>
        <textarea className="TextArea" value={newThought} onChange={onNewThoughtChange} />
        <button className="Submit" type="submit">❤️ Send Happy Thought ❤️</button>
      </form>
    </div>
  )
}

export default PostThought;