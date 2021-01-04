import React, { useState } from 'react'

import './HappyForm.css'

const HappyForm = ({ onMessageChange }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onMessageChange(newMessage);
    setNewMessage("")
  };

  return (
    <section className="happy-form-container"> 
      <form className="happy-form"> 
        <h3 className="happy-form-heading">
          What is making you happy right now?
        </h3>
        <textarea
          placeholder="Type your happy thought..."
          tabIndex="0"
          rows="3"
          value={newMessage}
          onChange={event => setNewMessage(event.target.value)} 
          className={
            newMessage.length > 140
            ? "happy-form-text-too-long" 
            : "happy-form-text"
          }
        >
        </textarea>
        <div className="form-footer"> 
          <button
            type="submit"
            onClick={handleSubmit} 
            disabled={
              newMessage.length < 6 || newMessage.length > 140 
              ? true 
              : false
            } 
            className={ 
              newMessage.length < 6 || newMessage.length > 140 
              ? "happy-form-input-button-disabled" 
              : "happy-form-input-button"
            }
            value="Add Message"
          >
          <span>❤️ Send Happy Thought! ❤️</span>
          </button>
          <p>{newMessage.length} / 140</p>
        </div>
      </form>
    </section>
  );
};
export default HappyForm;