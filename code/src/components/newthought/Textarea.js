import React from 'react';

const Textarea = ({ newThought, setNewThought }) => {
  return (
    <textarea
      rows="5"
      value={newThought}
      onChange={event => setNewThought(event.target.value)}
      placeholder="Your message should contain between 5 and 140 characters"
      className="input"
    >
    </textarea>
  )
}

export default Textarea;